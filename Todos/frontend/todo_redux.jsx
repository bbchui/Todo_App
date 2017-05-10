import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { receiveTodos, receiveTodo, removeTodo, fetchTodos } from './actions/todo_actions';
import { getAllTodos } from './reducers/selectors';
import thunk from './middleware/thunk';


window.store = configureStore;
window.selector = getAllTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.thunk = thunk;
window.fetchTodos = fetchTodos;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root store = {configureStore} />,
    document.getElementById('root')
  );
});
