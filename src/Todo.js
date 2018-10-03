import React from 'react';
import './App.css';


function Todo(props) {
  const todos = props.todos;
  const listItems = todos.map((todo) =>
    <li key={todo.toString()}>
      {todo} <span className="x-delete" onClick={props.handleRemove}>x</span>
    </li>
  );
  return (
        <ul>{listItems}</ul>
  )
}


export default Todo;
