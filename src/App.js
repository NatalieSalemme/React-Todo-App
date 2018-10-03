import React, { Component } from 'react';
import Header from './Header';
// import TodoContainer from './TodoContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      pendingTodo: ''
    }
  }

// lastTodoId = 0;

// newTodoId = () => {
//   const id = this.lastTodoId;
//   this.lastTodoId += 1;
//   return id;
// }
// removeTodo = id =>
//   this.setState({
//     todos: this.state.todos.filter(todo => id !== todo.id);
//   });

handleTodoInput = e =>
  this.setState({
    pendingTodo: e.target.value
  });

  newTodoSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.pendingTodo],
      pendingTodo: ' '
    });
  }
  render() {
    let todos = this.state.todos;
    const listItems = todos.map((todo) =>
      <li key={todo.toString()}>
        {todo}
      </li>
    );
    return (
      <div className="App">
        <Header
          title={'My Todos List'}
          newTodoSubmitHandler={this.newTodoSubmitHandler}
          pendingTodo={this.state.pendingTodo}
          handleTodoInput={this.handleTodoInput}
          />
          <ul>{listItems}</ul>
        {/* <TodoContainer
          todos={this.state.todos}/> */}
      </div>
    );
  }
}

export default App;
