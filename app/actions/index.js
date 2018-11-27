import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, TOGGLE_EDIT_STATE } from './types';
import uuidv1 from 'uuid/v1';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: uuidv1(),
    text
  }
}

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    id: todoId
  }
}

export const toggleEditState = (todoId) => {
  return {
    type: TOGGLE_EDIT_STATE,
    id: todoId
  }
}

export const editTodo = (todoId) => {
  console.log('edit todo action', todoId);
  return (dispatch, getState) => {
    const { form } = getState();

    console.log('form', form);

    dispatch({ type: EDIT_TODO, id: todoId });
  }
}