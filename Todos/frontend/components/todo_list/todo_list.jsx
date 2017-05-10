import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import TodoDetailView from './todo_detail_view';


class TodoList extends React.Component{

  componentDidMount(){
    this.props.fetchTodos();
  }
  render(){
    const { todos, createTodo, removeTodo, updateTodo} = this.props;
    return (
      <div>
        <h1>Todo App</h1>
        <ul>
        {todos.map((todo, idx) => <TodoListItem key={idx} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>)}
        </ul>
        <TodoForm createTodo={createTodo}/>
      </div>
    );
  }
}

export default TodoList;
