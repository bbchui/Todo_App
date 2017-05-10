import { connect } from 'react-redux';
import TodoList from './todo_list';

import { getAllTodos } from '../../reducers/selectors';
import { createTodo, removeTodo, updateTodo, fetchTodos} from '../../actions/todo_actions';
import { receiveErrors, clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  todos: getAllTodos(state)
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  clearErrors: (errors) => dispatch(clearErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
