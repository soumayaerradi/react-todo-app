import React, { useState } from 'react';
import "./App.css"

function Todo(props) {
  return (
    <div style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }} className="todo">
      {props.todo.name}
      <div>
        <button onClick={() => props.completeTask(props.index)}>done</button>
      </div>
    </div>
  )
}

const TodoForm = (props) => {

    const [value, setValue] = useState('') 


  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim() === '') {
      alert("Write something")
      return
    }
    props.submit(value)
    setValue('')
  }

  const onChangeText = (e) => {
    setValue(e.target.value)
  }

    return (
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" value={value} placeholder="Add a task" onChange={onChangeText} />
      </form>
    )
}

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
