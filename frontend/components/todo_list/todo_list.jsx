import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';


const TodoList = ({todos, receiveTodo, removeTodo}) => (
  <div>
    <h1>Todo App</h1>
    <ul>
    {todos.map((todo, idx) => <TodoListItem key={idx} todo={todo} removeTodo={removeTodo}/>)}
    </ul>
    <TodoForm receiveTodo={receiveTodo}/>
  </div>
);


export default TodoList;
