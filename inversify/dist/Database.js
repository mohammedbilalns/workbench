class Database {
    state = {
        todos: [
            {
                id: "1",
                title: "First todo",
                completed: false
            },
        ]
    };
    async create(todoData) {
        this.state.todos.push({
            id: (this.state.todos.length - 1).toString(),
            ...todoData
        });
    }
}
export default new Database();
//# sourceMappingURL=Database.js.map