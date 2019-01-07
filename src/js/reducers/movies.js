import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILED } from '../actions/actionTypes';
import defaultState from '../default-state/';

function movieReducer ( state = defaultState.movies, action ) {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return {
        ...state,
        status: 'LOADING'
      };
    case 'LOAD_MOVIES_SUCCESS':
      return {
        ...state,
        data: action.movies,
        status: 'LOAD_MOVIES_SUCCESS'
      };
    case 'LOAD_MOVIES_FAILED':
      return {
        ...state,
        data: [],
        status: 'LOAD_MOVIES_FAILED'
      };
    default: 
      return state;
  }
}

export default movieReducer;