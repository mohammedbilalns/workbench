import { TodoRepository } from "./todo.repository.js";
import {} from "./Database.js";
export class TodoService {
    _todoRepo;
    constructor(_todoRepo) {
        this._todoRepo = _todoRepo;
    }
    async createTodo(title) {
        return this._todoRepo.save(title);
    }
}
//# sourceMappingURL=todo.service.js.map