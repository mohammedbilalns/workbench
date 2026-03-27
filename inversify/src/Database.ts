
export interface ITodo {
  id: string,
  title: string,
  completed: boolean
}

export interface IDatabaseState{
  todos: ITodo[]
}

class Database {
  private state:  IDatabaseState ={
    todos: [
      {
        id: "1",
        title: "First todo",
        completed: false 
      },
    ]
  }


  async create(todoData: Omit<ITodo, "id">){
    this.state.todos.push({
      id: (this.state.todos.length -1).toString(),
      ...todoData
    })

  }
}


export default new Database()
