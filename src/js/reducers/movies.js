import {  LOAD_MOVIES,
          LOAD_MOVIES_SUCCESS,
          LOAD_MOVIES_FAILED,
          LOAD_MOVIE,
          LOAD_MOVIE_SUCCESS,
          LOAD_MOVIE_FAILED
       } from '../actions/actionTypes';
import defaultState from '../default-state';

function movieReducer(state = defaultState.movies, action) {
  switch (action.type) {
    case 'LOAD_MOVIE':
      return {
        ...state,
        selectedMovie: 'LOADING'
      };
    case 'LOAD_MOVIE_SUCCESS':
      return {
        ...state,
        selectedMovie: action.movie,
      };
    case 'LOAD_MOVIE_FAILED':
      return {
        ...state,
        selectedMovie: 'FAILED'
      };
    case 'LOAD_MOVIES':
      return {
        ...state,
        status: 'LOADING',
      };
    case 'LOAD_MOVIES_SUCCESS':
      return {
        ...state,
        data: action.movies,
        status: 'LOAD_MOVIES_SUCCESS',
      };
    case 'LOAD_MOVIES_FAILED':
      return {
        ...state,
        data: [],
        status: 'LOAD_MOVIES_FAILED',
      };
    case 'SELECT_MOVIE':
      return {
        ...state,
        selectedMovie: action.movie,
      };
    default:
      return state;
  }
}

export default movieReducer;
