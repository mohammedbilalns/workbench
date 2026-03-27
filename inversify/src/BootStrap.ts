import { TodoRepository } from "./todo.repository.js"
import { TodoService } from "./todo.service.js"
import { TodoController } from "./todo.controller.js"

export async function BootStarap(){

const repository = new TodoRepository()
const service = new TodoService(repository)
const controller = new TodoController(service)


  return controller.store("fsd")
}

BootStarap().then(console.log)

