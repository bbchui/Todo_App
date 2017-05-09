import React from 'react';

const TodoListItem = ({todo, removeTodo, updateTodo}) => (
  <li>{todo.title}
    <button onClick={() => removeTodo(todo)}>delete!</button>
    <button onClick={() => updateTodo(todo)}>{todo.done.toString()}</button>
  </li>
);

export default TodoListItem;
