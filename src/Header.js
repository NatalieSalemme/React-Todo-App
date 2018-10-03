import React from 'react';
import TodoInputForm from './TodoInputForm';

const Header = props =>
  <div className="App">
    <h2>{props.title}</h2>
    <TodoInputForm
      newTodoSubmitHandler={props.newTodoSubmitHandler}
      
      handleTodoInput={props.handleTodoInput}/>
  </div>

  export default Header;
