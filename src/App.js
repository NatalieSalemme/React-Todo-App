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
    if(!this.state.text) {
      alert('Please enter a to-do')
    } else {
      this.setState({
        todos: [ ...this.state.todos, this.state.text ],
        text: ''
      });
    }

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
  getTodoLength = () => this.state.todos.length;

  render() {
    const todoLength = this.getTodoLength();
    return(
      <div className="App">
        <Header title={'My To-Do\'s'} />
        <p>I have {todoLength} things left to do</p>
        {todoLength == 0 &&
          <p>Hip hip Hooray!</p>
        }
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
