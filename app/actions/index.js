import { ADD_TODO } from './types';
import uuidv1 from 'uuid/v1';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: uuidv1(),
    text
  }
}