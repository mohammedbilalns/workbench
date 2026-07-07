import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router, useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import {
  MAX_DEPTH,
  Task,
  TaskList,
  createTask,
  loadLists,
  extractTaskTreeWithMeta,
  saveLists,
  updateTaskTree,
} from '@/lib/task-storage';

export default function ListDetailScreen() {
  const theme = useTheme();
  const { id, autoEdit } = useLocalSearchParams<{ id: string; autoEdit?: string }>();
  const listId = Array.isArray(id) ? id[0] : id;

  const [list, setList] = useState<TaskList | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(autoEdit === 'true');
  const persistTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const schedulePersist = useCallback(
    (updated: TaskList) => {
      if (persistTimerRef.current) {
        clearTimeout(persistTimerRef.current);
      }
      persistTimerRef.current = setTimeout(() => {
        void persistList(updated);
      }, 300);
    },
    [persistList]
  );

  useEffect(() => {
    return () => {
      if (persistTimerRef.current) {
        clearTimeout(persistTimerRef.current);
      }
    };
  }, []);

  const updateList = useCallback(
    (updater: (current: TaskList) => TaskList) => {
      setList((current) => {
        if (!current) {
          return current;
        }
        const updated = updater(current);
        schedulePersist(updated);
        return updated;
      });
    },
    [schedulePersist]
  );

  const addTask = useCallback((title?: string) => {
    if (!list) {
      return;
    }
    const finalTitle = (typeof title === 'string' ? title : '').trim();
    updateList((current) => ({
      ...current,
      tasks: [...current.tasks, createTask(finalTitle)],
    }));
  }, [list, updateList]);


  const updateTask = useCallback(
    (taskId: string, updater: (task: Task) => Task) => {
      updateList((current) => ({
        ...current,
        tasks: updateTaskTree(current.tasks, taskId, updater),
      }));
    },
    [updateList]
  );

  const removeTask = useCallback(
    (taskId: string) => {
      updateList((current) => {
        const result = extractTaskTreeWithMeta(current.tasks, taskId);
        if (!result.removed) {
          return current;
        }
        const trashedTask: Task = {
          ...result.removed,
          trashedFrom: {
            parentId: result.parentId,
            index: result.index,
          },
        };
        return {
          ...current,
          tasks: result.tasks,
          trash: [...current.trash, trashedTask],
        };
      });
    },
    [updateList]
  );

  const renderTasks = useCallback(
    (tasks: Task[], depth: number) =>
      tasks.map((task, index) => (
        <View key={task.id}>
          <View style={[styles.taskRow, { marginLeft: (depth - 1) * Spacing.three }]}>
            <Pressable
              onPress={() => updateTask(task.id, (current) => ({ ...current, done: !current.done }))}
              style={({ pressed }) => [styles.checkbox, pressed && styles.pressed]}
            >
              <View
                style={[
                  styles.checkboxInner,
                  task.done && styles.checkboxChecked,
                  { borderColor: theme.textSecondary },
                ]}
              >
                {task.done && <ThemedText style={styles.checkboxMark}>✓</ThemedText>}
              </View>
            </Pressable>
            <TextInput
              autoFocus={list?.tasks.length === 1 && index === 0 && task.title === ''}
              value={task.title}
              onChangeText={(text) => updateTask(task.id, (current) => ({ ...current, title: text }))}
              placeholder="Task title"
              placeholderTextColor={theme.textSecondary}
              style={[
                styles.taskTitle,
                { color: theme.text },
                task.done && styles.taskTitleDone,
              ]}
            />
            {depth < MAX_DEPTH && (
              <Pressable
                onPress={() =>
                  updateTask(task.id, (current) => ({
                    ...current,
                    children: [...current.children, createTask('')],
                  }))
                }
                style={({ pressed }) => [styles.subtaskButton, pressed && styles.pressed]}
              >
                <ThemedText type="small" style={styles.subtaskButtonText}>
                  + Subtask
                </ThemedText>
              </Pressable>
            )}
            <Pressable
              onPress={() => removeTask(task.id)}
              style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
            >
              <ThemedText style={styles.iconButtonText}>×</ThemedText>
            </Pressable>
          </View>
          {task.children.length > 0 && renderTasks(task.children, depth + 1)}
        </View>
      )),
    [list?.tasks.length, removeTask, theme.text, theme.textSecondary, updateTask]
  );

  const taskTree = useMemo(() => {
    if (!list) {
      return null;
    }
    return renderTasks(list.tasks, 1);
  }, [list, renderTasks]);

  useEffect(() => {
    if (hydrated && list && list.tasks.length === 0) {
      addTask('');
    }
  }, [hydrated, list, addTask]);

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
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <SafeAreaView style={styles.safeArea}>
          <Pressable onPress={() => router.back()} style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
            <ThemedText type="small">← Back</ThemedText>
          </Pressable>

          <View style={styles.header}>
            {!isEditingTitle ? (
              <View style={styles.titleContainerWrapper}>
                <ThemedText type="title" style={styles.listTitleText}>{list.title}</ThemedText>
                <Pressable
                  onPress={() => setIsEditingTitle(true)}
                  style={({ pressed }) => [styles.editButton, pressed && styles.pressed]}
                >
                  <ThemedText style={styles.editButtonText}>Edit</ThemedText>
                </Pressable>
              </View>
            ) : (
              <View style={styles.titleContainerWrapper}>
                <TextInput
                  autoFocus
                  value={list.title}
                  onChangeText={(text) =>
                    updateList((current) => ({
                      ...current,
                      title: text.length > 0 ? text : 'Untitled list',
                    }))
                  }
                  onBlur={() => setIsEditingTitle(false)}
                  onSubmitEditing={() => setIsEditingTitle(false)}
                  placeholder="List title"
                  placeholderTextColor={theme.textSecondary}
                  style={[styles.listTitleInput, { color: theme.text, borderBottomColor: theme.textSecondary }]}
                />
                <Pressable
                  onPress={() => setIsEditingTitle(false)}
                  style={({ pressed }) => [styles.editButton, pressed && styles.pressed]}
                >
                  <ThemedText style={styles.editButtonText}>Done</ThemedText>
                </Pressable>
              </View>
            )}
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
            <View style={styles.taskTree}>
              {taskTree}
              <Pressable
                onPress={() => addTask('')}
                style={({ pressed }) => [styles.addTaskRowInline, pressed && styles.pressed]}
              >
                <ThemedText style={{ color: theme.textSecondary }}>+ Add Task</ThemedText>
              </Pressable>
            </View>
            <Pressable
              onPress={() => router.push(`/list/${list.id}/trash`)}
              style={({ pressed }) => [
                styles.trashButton,
                { borderColor: theme.textSecondary },
                pressed && styles.pressed,
              ]}
            >
              <ThemedText type="small" style={styles.trashButtonText}>
                View Trash ({list.trash.length})
              </ThemedText>
            </Pressable>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoiding: {
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
  header: {
    gap: Spacing.two,
  },
  titleContainerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  listTitleText: {
    flex: 1,
    fontSize: 24,
    fontWeight: '600',
  },
  listTitleInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: '600',
    borderBottomWidth: 1,
    paddingVertical: Spacing.one,
  },
  editButton: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
    borderRadius: 999,
    backgroundColor: '#2f6f4e',
  },
  editButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
  },
  scrollContent: {
    paddingBottom: Spacing.six,
    gap: Spacing.three,
  },
  taskTree: {
    gap: Spacing.one,
  },
  addTaskRowInline: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
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
  taskTitleDone: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
  checkbox: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#2f6f4e',
    borderColor: '#2f6f4e',
  },
  checkboxMark: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  subtaskButton: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 999,
  },
  subtaskButtonText: {
    opacity: 0.7,
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
  trashButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
    borderRadius: 999,
    borderWidth: 1,
  },
  trashButtonText: {
    fontWeight: '600',
  },
});
