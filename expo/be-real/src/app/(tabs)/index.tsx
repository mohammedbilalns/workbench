import { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useFocusEffect } from '@react-navigation/native';
import { router } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import {
  TaskList,
  createId,
  loadLists,
  saveLists,
} from '@/lib/task-storage';

export default function HomeScreen() {
  const theme = useTheme();
  const [lists, setLists] = useState<TaskList[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const parsed = await loadLists();
        if (!active) {
          return;
        }
        setLists(parsed);
      } catch {
        if (active) {
          setLists([]);
        }
      } finally {
        if (active) {
          setHydrated(true);
        }
      }
    };

    void load();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    void saveLists(lists);
  }, [hydrated, lists]);

  useFocusEffect(
    useCallback(() => {
      let active = true;

      const hasRealTasks = (tasks: TaskList['tasks']): boolean => {
        return tasks.some(task => task.title.trim() !== '' || hasRealTasks(task.children));
      };

      const refresh = async () => {
        try {
          const parsed = await loadLists();
          // Filter out lists that have no tasks or only tasks with empty titles
          const filtered = parsed.filter(list => hasRealTasks(list.tasks));
          
          if (filtered.length !== parsed.length) {
            await saveLists(filtered);
          }

          if (active) {
            setLists(filtered);
          }
        } catch {
          // Ignore refresh errors.
        }
      };
      void refresh();
      return () => {
        active = false;
      };
    }, [])
  );

  const createAndNavigate = useCallback(() => {
    let baseTitle = 'Untitled';
    let finalTitle = baseTitle;
    let counter = 1;

    while (lists.some((list) => list.title.trim().toLowerCase() === finalTitle.toLowerCase())) {
      finalTitle = `${baseTitle} ${counter}`;
      counter++;
    }

    const nextList: TaskList = {
      id: createId(),
      title: finalTitle,
      tasks: [],
      trash: [],
    };

    setLists((prev) => [...prev, nextList]);
    // We navigate with a flag to tell the detail screen to start in edit mode
    router.push({
      pathname: `/list/${nextList.id}`,
      params: { autoEdit: 'true' }
    });
  }, [lists]);

  const confirmDeleteList = useCallback((listId: string, listTitle: string) => {
    Alert.alert(
      'Delete list?',
      `This will remove “${listTitle || 'Untitled list'}” and all its tasks.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => setLists((prev) => prev.filter((item) => item.id !== listId)),
        },
      ]
    );
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    const results: { type: 'list' | 'task'; id: string; title: string; listId: string; listTitle?: string }[] = [];

    const findTasks = (tasks: any[], list: TaskList) => {
      for (const task of tasks) {
        if (task.title.toLowerCase().includes(query)) {
          results.push({
            type: 'task',
            id: task.id,
            title: task.title,
            listId: list.id,
            listTitle: list.title,
          });
        }
        if (task.children && task.children.length > 0) {
          findTasks(task.children, list);
        }
      }
    };

    lists.forEach((list) => {
      if (list.title.toLowerCase().includes(query)) {
        results.push({
          type: 'list',
          id: list.id,
          title: list.title,
          listId: list.id,
        });
      }
      findTasks(list.tasks, list);
    });

    return results;
  }, [lists, searchQuery]);

  const listItems = useMemo(
    () =>
      lists.map((list) => (
        <Pressable
          key={list.id}
          onPress={() => router.push(`/list/${list.id}`)}
          style={({ pressed }) => [
            styles.listCard,
            { backgroundColor: theme.backgroundElement },
            pressed && styles.pressed,
          ]}
        >
          <View style={styles.listHeader}>
            <View style={{ flex: 1 }}>
              <ThemedText style={styles.listTitle}>{list.title}</ThemedText>
            </View>
            <Pressable
              onPress={(e) => {
                e.stopPropagation();
                confirmDeleteList(list.id, list.title);
              }}
              style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
            >
              <ThemedText style={styles.iconButtonText}>×</ThemedText>
            </Pressable>
          </View>
          <ThemedText type="small" style={styles.listMetaText}>
            {list.tasks.length} tasks
          </ThemedText>
        </Pressable>
      )),
    [lists, theme.backgroundElement, theme.text, theme.textSecondary, confirmDeleteList]
  );

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Task Manager
          </ThemedText>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search lists or tasks..."
            placeholderTextColor={theme.textSecondary}
            style={[styles.searchInput, { color: theme.text, borderColor: theme.textSecondary }]}
          />
        </View>

        {searchQuery.trim().length > 0 ? (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <ThemedText type="subtitle">Search Results</ThemedText>
            {searchResults && searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <Pressable
                  key={`${result.id}-${index}`}
                  onPress={() => router.push(`/list/${result.listId}`)}
                  style={({ pressed }) => [
                    styles.searchResultItem,
                    { backgroundColor: theme.backgroundElement },
                    pressed && styles.pressed,
                  ]}
                >
                  <View style={{ flex: 1 }}>
                    <ThemedText style={styles.resultTitle}>{result.title}</ThemedText>
                    <ThemedText type="small" style={styles.resultMeta}>
                      {result.type === 'list' ? 'List' : `Task in "${result.listTitle}"`}
                    </ThemedText>
                  </View>
                </Pressable>
              ))
            ) : (
              <ThemedText style={styles.emptyState}>No results found.</ThemedText>
            )}
          </ScrollView>
        ) : (
          <>
            <Pressable
              onPress={createAndNavigate}
              style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed, { alignSelf: 'flex-start' }]}
            >
              <ThemedText style={styles.primaryButtonText}>+ Create List</ThemedText>
            </Pressable>

            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
              {listItems.length > 0 ? (
                listItems
              ) : (
                <ThemedText style={styles.emptyState}>Add your first list to get started.</ThemedText>
              )}
            </ScrollView>
          </>
        )}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.four,
    gap: Spacing.three,
  },
  header: {
    gap: Spacing.two,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '700',
  },
  searchContainer: {
    marginBottom: Spacing.one,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    fontSize: 16,
  },
  searchResultItem: {
    borderRadius: Spacing.three,
    padding: Spacing.three,
    marginBottom: Spacing.two,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  resultMeta: {
    opacity: 0.6,
  },
  sectionTitle: {
    fontSize: 20,
  },
  listTitleInput: {
    borderBottomWidth: 1,
    paddingVertical: Spacing.one,
    fontSize: 18,
  },
  scrollContent: {
    paddingBottom: Spacing.six,
    gap: Spacing.three,
  },
  listCard: {
    borderRadius: Spacing.four,
    padding: Spacing.four,
    gap: Spacing.one,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  listMetaText: {
    opacity: 0.5,
  },
  iconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  iconButtonText: {
    fontSize: 20,
    lineHeight: 20,
  },
  primaryButton: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: 999,
    backgroundColor: '#2f6f4e',
    alignItems: 'center',
    marginTop: Spacing.one,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.7,
  },
  emptyState: {
    opacity: 0.7,
    textAlign: 'center',
    marginTop: Spacing.four,
  },
});

