import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = [];

const errorsReducer = (state=initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      let newState = [];
      action.errors.forEach((error) => {
        newState.push(error);
      });
      return newState;
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
};
