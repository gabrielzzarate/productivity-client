import { ADD_TODO, TOGGLE_TODO } from '../actions/types';

// handles how an individual todo is updated
const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO: 
      console.log('action', action);
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

// handles how the state array of todos are updated
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TOGGLE_TODO: 
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;