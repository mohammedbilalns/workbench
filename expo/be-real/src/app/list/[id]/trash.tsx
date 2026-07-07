import { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router, useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import {
  Task,
  TaskList,
  extractTaskTree,
  insertTaskTree,
  loadLists,
  removeTaskTree,
  saveLists,
  updateTaskTree,
} from '@/lib/task-storage';

export default function ListTrashScreen() {
  const theme = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const listId = Array.isArray(id) ? id[0] : id;

  const [list, setList] = useState<TaskList | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const lists = await loadLists();
        if (!active) {
          return;
        }
        const found = lists.find((item) => item.id === listId) ?? null;
        setList(found);
      } catch {
        if (active) {
          setList(null);
        }
      } finally {
        if (active) {
          setHydrated(true);
        }
      }
    };

    if (listId) {
      void load();
    }

    return () => {
      active = false;
    };
  }, [listId]);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      const refresh = async () => {
        try {
          const lists = await loadLists();
          if (!active) {
            return;
          }
          const found = lists.find((item) => item.id === listId) ?? null;
          setList(found);
        } catch {
          if (active) {
            setList(null);
          }
        }
      };

      if (listId) {
        void refresh();
      }

      return () => {
        active = false;
      };
    }, [listId])
  );

  const persistList = useCallback(async (updated: TaskList) => {
    const lists = await loadLists();
    const next = lists.map((item) => (item.id === updated.id ? updated : item));
    await saveLists(next);
  }, []);

  const updateList = useCallback(
    (updater: (current: TaskList) => TaskList) => {
      setList((current) => {
        if (!current) {
          return current;
        }
        const updated = updater(current);
        void persistList(updated);
        return updated;
      });
    },
    [persistList]
  );

  const restoreTask = useCallback(
    (taskId: string) => {
      updateList((current) => {
        const result = extractTaskTree(current.trash, taskId);
        if (!result.removed) {
          return current;
        }
        const { trashedFrom, ...restored } = result.removed;
        const restoreTarget = trashedFrom ?? { parentId: null, index: current.tasks.length };
        const insertResult = insertTaskTree(
          current.tasks,
          restoreTarget.parentId,
          restoreTarget.index,
          restored
        );
        return {
          ...current,
          trash: result.tasks,
          tasks: insertResult.inserted ? insertResult.tasks : [...current.tasks, restored],
        };
      });
    },
    [updateList]
  );

  const deleteTaskForever = useCallback(
    (taskId: string) => {
      updateList((current) => ({
        ...current,
        trash: removeTaskTree(current.trash, taskId),
      }));
    },
    [updateList]
  );

  const clearTrash = useCallback(() => {
    if (!list || list.trash.length === 0) {
      return;
    }

    Alert.alert(
      'Clear trash?',
      'This will permanently delete all items in the trash.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () =>
            updateList((current) => ({
              ...current,
              trash: [],
            })),
        },
      ]
    );
  }, [list, updateList]);

  const updateTrashTask = useCallback(
    (taskId: string, updater: (task: Task) => Task) => {
      updateList((current) => ({
        ...current,
        trash: updateTaskTree(current.trash, taskId, updater),
      }));
    },
    [updateList]
  );

  const renderTrashTasks = useCallback(
    (tasks: Task[], depth: number) =>
      tasks.map((task) => (
        <View key={task.id}>
          <View style={[styles.taskRow, { marginLeft: (depth - 1) * Spacing.three }]}>
            <View style={[styles.checkboxPlaceholder, { borderColor: theme.textSecondary }]} />
            <ThemedText
              style={[styles.taskTitle, { color: theme.text }]}
            >
              {task.title.trim().length > 0 ? task.title : 'Untitled task'}
            </ThemedText>
            <Pressable
              onPress={() => restoreTask(task.id)}
              style={({ pressed }) => [
                styles.restoreButton,
                { borderColor: theme.textSecondary },
                pressed && styles.pressed,
              ]}
            >
              <ThemedText type="small" style={styles.restoreButtonText}>
                Restore
              </ThemedText>
            </Pressable>
            <Pressable
              onPress={() => deleteTaskForever(task.id)}
              style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
            >
              <ThemedText style={styles.iconButtonText}>×</ThemedText>
            </Pressable>
          </View>
          {task.children.length > 0 && renderTrashTasks(task.children, depth + 1)}
        </View>
      )),
    [deleteTaskForever, restoreTask, theme.text, theme.textSecondary, updateTrashTask]
  );

  const trashTree = useMemo(() => {
    if (!list) {
      return null;
    }
    return renderTrashTasks(list.trash, 1);
  }, [list, renderTrashTasks]);

  if (!listId) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedText style={styles.emptyState}>Missing list id.</ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  if (!list && hydrated) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Pressable onPress={() => router.back()} style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
            <ThemedText type="small">← Back</ThemedText>
          </Pressable>
          <ThemedText style={styles.emptyState}>List not found.</ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  if (!list) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedText style={styles.emptyState}>Loading...</ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Pressable onPress={() => router.back()} style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
          <ThemedText type="small">← Back</ThemedText>
        </Pressable>
        <ThemedText type="subtitle">Trash</ThemedText>
        <ThemedText style={styles.subtitle}>
          Items stay here until you delete them permanently.
        </ThemedText>
        <Pressable
          onPress={clearTrash}
          disabled={!list.trash.length}
          style={({ pressed }) => [
            styles.clearButton,
            { borderColor: theme.textSecondary },
            (pressed || !list.trash.length) && styles.pressed,
          ]}
        >
          <ThemedText type="small" style={styles.clearButtonText}>
            Clear Trash
          </ThemedText>
        </Pressable>

        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          {list.trash.length > 0 ? (
            <View style={styles.taskTree}>{trashTree}</View>
          ) : (
            <ThemedText style={styles.emptyState}>Trash is empty.</ThemedText>
          )}
        </ScrollView>
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
  backButton: {
    alignSelf: 'flex-start',
  },
  subtitle: {
    opacity: 0.7,
  },
  scrollContent: {
    paddingBottom: Spacing.six,
    gap: Spacing.three,
  },
  taskTree: {
    gap: Spacing.one,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    paddingVertical: Spacing.one,
  },
  taskTitle: {
    flex: 1,
  },
  checkboxPlaceholder: {
    width: 28,
    height: 28,
    borderRadius: 4,
    borderWidth: 1,
    opacity: 0.2,
  },
  restoreButton: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 999,
    borderWidth: 1,
  },
  restoreButtonText: {
    fontWeight: '600',
  },
  clearButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
    borderRadius: 999,
    borderWidth: 1,
  },
  clearButtonText: {
    fontWeight: '600',
  },
  iconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  iconButtonText: {
    fontSize: 18,
    lineHeight: 18,
  },
  pressed: {
    opacity: 0.7,
  },
  emptyState: {
    opacity: 0.7,
  },
});
