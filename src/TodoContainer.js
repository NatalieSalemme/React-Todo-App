import React from 'react';
import './App.css';

function TodoContainer(props) {
  const todos = props.todos;
  const listItems = todos.map((todo) =>
    <li key={todo.toString()}>
      {todo}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


export default TodoContainer;
