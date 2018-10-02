import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const TodoContainer = props =>
  <div className="todo-container">
    {props.todos}
  </div>

TodoContainer.propTypes = {
  todos: PropTypes.array
}
export default TodoContainer;
