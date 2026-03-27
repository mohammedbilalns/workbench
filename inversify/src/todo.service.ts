import { TodoRepository } from "./todo.repository.js"
import { type ITodo } from "./Database.js"

export class TodoService {
  constructor(private readonly _todoRepo: TodoRepository){}

  async createTodo(title: ITodo["title"]){
    
    return this._todoRepo.save(title)
  }
}
