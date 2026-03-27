import Database, { type ITodo } from "./Database.js"

export class TodoRepository {
  private readonly _db = Database

  async save(title: ITodo["title"]){
    return this._db.create({
      title,
      completed: false
    })

  }
}
