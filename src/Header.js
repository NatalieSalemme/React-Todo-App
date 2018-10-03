import React from 'react';
import TodoInputForm from './TodoInputForm';

const Header = props =>
  <div>
    <h2>{props.title}</h2>
    <TodoInputForm
      newTodoSubmitHandler={props.newTodoSubmitHandler}
      pendingTodo={props.pendingTodo}
      handleTodoInput={props.handleTodoInput}/>
  </div>

  export default Header;
