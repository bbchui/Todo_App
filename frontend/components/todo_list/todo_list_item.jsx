import React from 'react';

const TodoListItem = ({todo, removeTodo}) => (
  <li>{todo.title}
    <button onClick={removeTodo(todo.id)}>delete!</button>
  </li>
);

export default TodoListItem;
