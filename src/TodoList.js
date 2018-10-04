import React from 'react';
import './App.css';


class TodoList extends React.Component {
  render() {
    return(
      <ul>
        { this.props.todos.map((todo, index) => {
          return <li
            key={todo}
            className="list-item">

            <span
              className="x-delete"
              onClick={(e) => { this.props.removeItem(index)}}>
              X
            </span>
            { todo }
          </li>
        })}
      </ul>
    );
  }
}

export default TodoList;
