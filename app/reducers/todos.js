import { ADD_TODO, TOGGLE_TODO, TOGGLE_EDIT_STATE } from '../actions/types';

// handles how an individual todo is updated
const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO: 
      return {
        id: action.id,
        text: action.text,
        completed: false,
        editState: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    case TOGGLE_EDIT_STATE:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        editState: !state.editState
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
    case TOGGLE_EDIT_STATE:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;