import React, { Component } from 'react';
import Header from './Header';
import TodoContainer from './TodoContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      pendingTodo: ''
    }
  }

lastTodoId = 0;

newTodoId = () => {
  const id = this.lastTodoId;
  this.lastTodoId += 1;
  return id;
}

removeTodo = id =>
  this.setState({
    todos: this.state.todos.filter(todo => id !== todo.id)
  });

handleTodoInput = e =>
  this.setState({
    pendingTodo: e.target.value,
  });

  newTodoSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.pendingTodo],
      pendingTodo: e.target.reset()
    });
  }
  getTodoLength = () => this.state.todos.length;

  render() {
    const todoLength = this.getTodoLength();
    return (
      <div>

        <Header
          title={'My To-do List'}
          newTodoSubmitHandler={this.newTodoSubmitHandler}
          handleTodoInput={this.handleTodoInput}
          />
          <p className="App">I have {todoLength} things left to do</p>
        <TodoContainer
          todos={this.state.todos}
          removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
