import { TODO_ADDED, TODO_TOGGLED, TODO_EDIT_STATE_TOGGLED, TODO_EDITED } from '../actions/types';

// handles how an individual todo is updated
const todo = (state, action) => {
  switch (action.type) {
    case TODO_ADDED: 
      return {
        id: action.id,
        text: action.text,
        completed: false,
        editState: false,
      };
    case TODO_TOGGLED:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    case TODO_EDIT_STATE_TOGGLED:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        editState: !state.editState
      };
    case TODO_EDITED:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        text: action.text,
      }

    default:
      return state;
  }
};

// handles how the state array of todos are updated
const todos = (state = [], action) => {
  switch (action.type) {
    case TODO_ADDED:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TODO_TOGGLED: 
      return state.map(t => todo(t, action));
    case TODO_EDIT_STATE_TOGGLED:
      return state.map(t => todo(t, action));
    case TODO_EDITED: 
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;