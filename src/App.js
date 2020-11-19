import React, { useState } from 'react';
import Todo from './Todo.js'
import TodoForm from './TodoForm.js'
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState(
    [
      { name: "Learn React", completed: false },
      { name: "Learn states", completed: true },
      { name: "Learn components", completed: true }
    ]
  );

  const addTodo = (todo) => {
    const newTodos = [...todos, { name: todo, completed: false }]
    setTodos(newTodos)
  }

  const completeTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((item, index) =>
          <Todo key={index} todo={item} index={index} completeTask={completeTask} />
        )}
        <div>
          <TodoForm submit={addTodo} />
        </div>
      </div>
    </div>
  )
}

export default App;
