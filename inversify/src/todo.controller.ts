import { TodoService } from "./todo.service.js"
export class TodoController{
  constructor(private readonly _todoService : TodoService){}

  async store(requestData: string){
    return this._todoService.createTodo(requestData)
  }
}


