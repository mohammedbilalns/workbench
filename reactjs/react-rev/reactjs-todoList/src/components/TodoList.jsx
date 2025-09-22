import React from 'react'

export default function TodoList() {
    let todos = [ "Go to the gum",
        "Eat more fruits",]
       
    
  return (
    <ul>
        {todos.map((todo, todoIndex) => {
            return {
                <li></li>
            }
        })}
      
    </ul>
  )
}
