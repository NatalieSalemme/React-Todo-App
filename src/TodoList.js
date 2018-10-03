import React from 'react';
import './App.css';
import Todo from './Todo';

function TodoList(props) {
  return (
    <Todo
      handleRemove={() => props.removeTodo(todo.id)}
    />
  )
}


export default TodoList;
