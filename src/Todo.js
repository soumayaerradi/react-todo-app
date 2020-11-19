import React from 'react';
import "./App.css"

const Todo = (props) => {
    return (
      <div style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }} className="todo">
        {props.todo.name}
        <div>
          <button onClick={() => props.completeTask(props.index)}>done</button>
        </div>
      </div>
    )
  }

  export default Todo;