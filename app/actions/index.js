import { TODO_ADDED, TODO_TOGGLED, TODO_EDITED, TODO_DELETED, TODO_EDIT_STATE_TOGGLED } from './types';
import uuidv1 from 'uuid/v1';

export const addTodo = (text) => {
  return {
    type: TODO_ADDED,
    id: uuidv1(),
    text
  }
}

export const toggleTodo = (todoId) => {
  return {
    type: TODO_TOGGLED,
    id: todoId
  }
}

export const toggleEditState = (todoId) => {
  return {
    type: TODO_EDIT_STATE_TOGGLED,
    id: todoId
  }
}

export const editTodo = (todoId) => {
  return (dispatch, getState) => {
    const { form } = getState();
    const text = form.editTodo.values.text;
    dispatch({ type: TODO_EDITED, id: todoId, text });
  }
}
 
export const deleteTodo = (todoId) => {
  return {
    type: TODO_DELETED,
    id: todoId
  }
}