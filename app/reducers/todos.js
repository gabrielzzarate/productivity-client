import { TODO_ADDED, TODO_TOGGLED, TODO_EDIT_STATE_TOGGLED, TODO_EDITED, TODO_DELETED } from '../actions/types';

// handles how an individual todo is updated
const todo = (state, action) => {
  switch (action.type) {
    case TODO_ADDED: 
      return {
        id: action.id,
        text: null,
        completed: false,
        editState: true,
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
        editState: false,
        text: action.text,
      };
    case TODO_DELETED:  
      if (state.id !== action.id) {
        return state;
      }

     return state;


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
    case TODO_DELETED:
      return {
        ...state.filter(item => item.id !== action.id)
      }
    default:
      return state;
  }
};

export default todos;