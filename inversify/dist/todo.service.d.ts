import { TodoRepository } from "./todo.repository.js";
import { type ITodo } from "./Database.js";
export declare class TodoService {
    private readonly _todoRepo;
    constructor(_todoRepo: TodoRepository);
    createTodo(title: ITodo["title"]): Promise<void>;
}
//# sourceMappingURL=todo.service.d.ts.map