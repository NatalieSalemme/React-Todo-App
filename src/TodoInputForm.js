import React from 'react';

const TodoInputForm = () => {
  <form onSubmit={props.newTodoSubmitHandler}>
    <input
      type="text"
      onChange={props.handleTodoInput}
      placeholder="Add todo"
      value={props.pendingTodo}
      />
    <button
      type="submit"
      name="submit"
      className="add-button"
      >Add</button>
  </form>
}
export default TodoInputForm;
