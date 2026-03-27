import Database, {} from "./Database.js";
export class TodoRepository {
    _db = Database;
    async save(title) {
        return this._db.create({
            title,
            completed: false
        });
    }
}
//# sourceMappingURL=todo.repository.js.map