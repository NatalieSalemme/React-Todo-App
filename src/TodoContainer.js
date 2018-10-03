import React from 'react';
import './App.css';
import TodoList from './TodoList';

function TodoContainer(props) {
  return (
    <TodoList
      todos = {props.todos}
      removeTodo = {props.removeTodo}/>
  )
}


export default TodoContainer;
