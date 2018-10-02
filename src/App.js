import React, { Component } from 'react';
import Header from './Header';
import TodoContainer from './TodoContainer';
import './App.css';

class App extends Component {
  state = [
      {
        pendingTodo: '',
        todos: []
      }
    ]
handleTodoInput = e =>
  this.setState({
    pendingTodo: e.target.value
  });

  newTodoSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      todos: [
        {
          item: this.state.pendingTodo
    },
    ...this.state.todos
  ],
    pendingTodo: ''
    });
  }
  render() {
    return (
      <div className="App">
        <Header
          title={'My Todos List'}
          newTodoSubmitHandler={this.newTodoSubmitHandler}
          pendingTodo={this.state.pendingTodo}
          handleTodoInput={this.handleTodoInput}
          />
        <TodoContainer
          todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
