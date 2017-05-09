import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './frontend/store/store';
import Root from './frontend/components/root';
import { receiveTodos, receiveTodo, removeTodo } from './frontend/actions/todo_actions';
import { getAllTodos } from './frontend/reducers/selectors';
window.store = configureStore;
window.selector = getAllTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root store = {configureStore} />,
    document.getElementById('root')
  );
});
