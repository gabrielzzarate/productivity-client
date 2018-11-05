import { ADD_TODO, TOGGLE_TODO } from './types';
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