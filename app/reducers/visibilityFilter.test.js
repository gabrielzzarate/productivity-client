import visibilityFilter from './visibilityFilter';
import { SET_VISIBIILITY_FILTER } from '../actions/types';

describe('todo visibility filter reducer', () => {
  
  it('should update filter state string to new value', () => {
    const stateBefore = 'SHOW_ALL';
    const action = {
      type: SET_VISIBIILITY_FILTER,
      filter: 'SHOW_COMPLETED'
    };
    const stateAfter = 'SHOW_COMPLETED';
    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
  });
});