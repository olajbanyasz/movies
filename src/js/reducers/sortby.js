import { SORT_MOVIES } from '../actions/actionTypes';
import defaultState from '../default-state/';

function sortby ( state = defaultState.sortby, action) {
  switch (action.type) {
    case 'SORT_MOVIES':
      state = action.sortby;
      return state;
    default: 
      return state;
  }
}

export default sortby;