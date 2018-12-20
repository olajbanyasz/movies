import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILED } from '../actions/actionTypes';
import defaultState from '../default-state/';

function sortby ( state = defaultState.movies, action ) {
  switch (action.type) {
    case 'LOAD_MOVIES':
      state = {
        ...state,
        state: 'LOADING'
      };
      return state;
    case 'LOAD_MOVIES_SUCCESS':
      state = {
        ...state,
        data: action.movies,
        state: 'LOAD_MOVIES_SUCCESS'
      };
      return state;
    case 'LOAD_MOVIES_FAILED':
      state = {
        ...state,
        data: [],
        state: 'LOAD_MOVIES_FAILED'
      };
      return state;
    default: 
      return state;
  }
}

export default sortby;