import AsyncStorage from '@react-native-async-storage/async-storage';

export type Task = {
  id: string;
  title: string;
  done: boolean;
  children: Task[];
  trashedFrom?: {
    parentId: string | null;
    index: number;
  };
};

export type TaskList = {
  id: string;
  title: string;
  date?: string;
  tasks: Task[];
  trash: Task[];
};

export const STORAGE_KEY = 'task-manager-lists-v1';
export const MAX_DEPTH = 4;

export function createId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function createTask(title: string): Task {
  return { id: createId(), title, done: false, children: [] };
}

export function updateTaskTree(
  tasks: Task[],
  taskId: string,
  updater: (task: Task) => Task
): Task[] {
  return tasks.map((task) => {
    if (task.id === taskId) {
      return updater(task);
    }

    if (task.children.length === 0) {
      return task;
    }

    return { ...task, children: updateTaskTree(task.children, taskId, updater) };
  });
}

export function removeTaskTree(tasks: Task[], taskId: string): Task[] {
  return tasks
    .filter((task) => task.id !== taskId)
    .map((task) => ({
      ...task,
      children: removeTaskTree(task.children, taskId),
    }));
}

export function extractTaskTree(
  tasks: Task[],
  taskId: string
): { tasks: Task[]; removed: Task | null } {
  let removed: Task | null = null;

  const nextTasks = tasks
    .filter((task) => {
      if (task.id === taskId) {
        removed = task;
        return false;
      }
      return true;
    })
    .map((task) => {
      if (removed) {
        return task;
      }
      const childResult = extractTaskTree(task.children, taskId);
      if (childResult.removed) {
        removed = childResult.removed;
      }
      return { ...task, children: childResult.tasks };
    });

  return { tasks: nextTasks, removed };
}

export function extractTaskTreeWithMeta(
  tasks: Task[],
  taskId: string
): { tasks: Task[]; removed: Task | null; parentId: string | null; index: number } {
  let removed: Task | null = null;
  let parentId: string | null = null;
  let removedIndex = -1;

  const nextTasks = tasks
    .filter((task, index) => {
      if (task.id === taskId) {
        removed = task;
        removedIndex = index;
        parentId = null;
        return false;
      }
      return true;
    })
    .map((task) => {
      if (removed) {
        return task;
      }
      const childResult = extractTaskTreeWithMeta(task.children, taskId);
      if (childResult.removed) {
        removed = childResult.removed;
        removedIndex = childResult.index;
        parentId = childResult.parentId ?? task.id;
        return { ...task, children: childResult.tasks };
      }
      return task;
    });

  return { tasks: nextTasks, removed, parentId, index: removedIndex };
}

export function insertTaskTree(
  tasks: Task[],
  parentId: string | null,
  index: number,
  task: Task
): { tasks: Task[]; inserted: boolean } {
  if (!parentId) {
    const clamped = Math.max(0, Math.min(index, tasks.length));
    const next = [
      ...tasks.slice(0, clamped),
      task,
      ...tasks.slice(clamped),
    ];
    return { tasks: next, inserted: true };
  }

  let inserted = false;
  const next = tasks.map((item) => {
    if (item.id === parentId) {
      const clamped = Math.max(0, Math.min(index, item.children.length));
      inserted = true;
      return {
        ...item,
        children: [
          ...item.children.slice(0, clamped),
          task,
          ...item.children.slice(clamped),
        ],
      };
    }
    if (item.children.length === 0) {
      return item;
    }
    const childResult = insertTaskTree(item.children, parentId, index, task);
    if (childResult.inserted) {
      inserted = true;
      return { ...item, children: childResult.tasks };
    }
    return item;
  });

  return { tasks: next, inserted };
}

export function getTodayStamp() {
  return new Date().toISOString().slice(0, 10);
}

export async function loadLists(): Promise<TaskList[]> {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return [];
  }
  const parsed = JSON.parse(stored) as TaskList[];
  return parsed.map((list) => ({
    ...list,
    trash: Array.isArray(list.trash) ? list.trash : [],
  }));
}

export async function saveLists(lists: TaskList[]) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
}
