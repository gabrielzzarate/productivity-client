import todos from './todos';
import { ADD_TODO, TOGGLE_TODO } from '../actions/types';

describe( 'todo reducer', () => {
  it('should add a todo', () => {
    const stateBefore = [];
    const action = {
      type: ADD_TODO,
      id: 0,
      text: 'A testing todo'
    };
    const stateAfter = [
      {
        id: 0,
        text: 'A testing todo',
        completed: false
      }
    ];

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });

  it('Should toggle completed state of todo', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'A testing todo',
        completed: false,
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: false,
      }
    ];
    const action = {
      type: TOGGLE_TODO,
      id: 1
    };
    const stateAfter = [
      {
        id: 0,
        text: 'A testing todo',
        completed: false,
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: true
      }
    ];

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });
});
