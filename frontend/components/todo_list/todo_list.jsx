import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import { receiveTodo, removeTodo, updateTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';


const TodoList = ({todos, receiveTodo, removeTodo, updateTodo}) => (
  <div>
    <h1>Todo App</h1>
    <ul>
    {todos.map((todo, idx) => <TodoListItem key={idx} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>)}
    </ul>
    <TodoForm receiveTodo={receiveTodo}/>
  </div>
);


export default TodoList;
