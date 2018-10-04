import React, {Component} from 'react'
import TodoList from './TodoList';
import Header from './Header';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      text: '' };
    this.removeItem = this.removeItem.bind(this)
  }

  addTodo(e) {
    e.preventDefault();
    this.setState({
      todos: [ this.state.text, ...this.state.todos ],
      text: ''
    });
  }


  updateValue(e) {
    this.setState({
      text: [e.target.value]
    })
  }
  removeItem(index) {
    const todos = this.state.todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    this.setState({ todos })
  }
  render() {
    return(
      <div className="App">
        <Header title={'My To-Do\'s'} />
        <form onSubmit = {(e) => this.addTodo(e)}>
          <input
            placeholder="Add Todo"
            value={this.state.text}
            onChange={(e) => {this.updateValue(e)}}
            />
          <button type="submit">Add Todo</button>
        </form>
        <TodoList todos={this.state.todos} removeItem={this.removeItem} />
      </div>
    );
  }
}
