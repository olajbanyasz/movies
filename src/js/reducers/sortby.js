import SORT_MOVIES  from '../actions/actionTypes';
import defaultState from '../default-state';

function sortby(state = defaultState.sortby, action) {
  switch (action.type) {
    case 'SORT_MOVIES':
      return action.sortby;
    case 'RESET_STORE':
      return defaultState.sortby;
    default:
      return state;
  }
}

export default sortby;
