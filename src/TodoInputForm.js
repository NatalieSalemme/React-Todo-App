import React from 'react';

const TodoInputForm = props =>
  <div>
  <form onSubmit={props.newTodoSubmitHandler}>
    <input
      type="text"
      onChange={props.handleTodoInput}
      placeholder="Add todo"
      />
    <button
      type="submit"
      name="submit"
      className="add-button"
      >Add</button>
  </form>
</div>
export default TodoInputForm;
