import { TodoService } from "./todo.service.js";
export class TodoController {
    _todoService;
    constructor(_todoService) {
        this._todoService = _todoService;
    }
    async store(requestData) {
        return this._todoService.createTodo(requestData);
    }
}
//# sourceMappingURL=todo.controller.js.map