import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() { 
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onInputChange = e => {
    this.setState({ currentTodo: e.target.value })
  }

  onSubmit = e => {
    console.log('submitted')
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({ todos: todosCopy, currentTodo: "" })
    e.preventDefault()
  }

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({ todos: todosCopy });
  }

  render() {
    let listTodos = this.state.todos.map((e, i) => {
      return (
        <SingleTodo key={i} todo={e} delete={() => this.deleteTodo(i) } />
      );
    })
    return (
      <div>
        <h1>To Do List</h1>
        <h2>My first React app</h2>
        <form onSubmit={this.onSubmit}>
          <input placeholder="Enter to-do" value={this.state.currentTodo} 
          onChange={ this.onInputChange }/>
          <button>Add!</button>
        </form>
        { this.state.todos.length === 0 ? "Surely you have something to do..." : <ul>{ listTodos }</ul> }
      </div>
    )
  }
}

const SingleTodo = props => {
  return (
      <li>{props.todo}<button onClick={props.delete}>x</button></li>
  )
}

export default App;