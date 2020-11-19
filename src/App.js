import React from 'react';
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

class TodoForm extends React.Component {
  state = {
    value: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.value.trim() === '') {
      alert("Write something")
      return
    }
    this.props.submit(this.state.value)
    this.setState({
      value: ''
    })
  }

  onChangeText = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="input" type="text" value={this.state.value} placeholder="Add a task" onChange={this.onChangeText} />
      </form>
    )
  }
}

class App extends React.Component {
  state = {
    todos: [
      { name: "Learn React", completed: false },
      { name: "Learn states", completed: true },
      { name: "Learn components", completed: true }
    ]
  }

  addTodo = (todo) => {
    const newTodos = [...this.state.todos, { name: todo, completed: false }]
    this.setState({
      todos: newTodos
    })
  }

  completeTask = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].completed = true
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="app">
        <div className="todo-list">
          {this.state.todos.map((item, index) =>
            <Todo key={index} todo={item} index={index} completeTask={this.completeTask} />
          )}
          <div>
            <TodoForm submit={this.addTodo} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
