import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach((todo) =>{
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      let newState2 = merge({}, state);
      newState2[action.todo.id] = action.todo;
      return newState2;
    case REMOVE_TODO:
      let newState3 = merge({}, state);
      delete newState3[action.todo.id];
      return newState3;
    case UPDATE_TODO:
      let newState4 = merge({}, state);
      newState4[action.todo.id].done === false ? newState4[action.todo.id].done = true : newState4[action.todo.id].done = false;
      return newState4;
    default:
      return state;
  }
};

export default todosReducer;
