export interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}
export interface IDatabaseState {
    todos: ITodo[];
}
declare class Database {
    private state;
    create(todoData: Omit<ITodo, "id">): Promise<void>;
}
declare const _default: Database;
export default _default;
//# sourceMappingURL=Database.d.ts.map