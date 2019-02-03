import {  LOAD_MOVIES,
          LOAD_MOVIES_SUCCESS,
          LOAD_MOVIES_FAILED,
          LOAD_ONE_MOVIE,
          LOAD_ONE_MOVIE_SUCCESS,
          LOAD_ONE_MOVIE_FAILED,
          SELECT_ONE_MOVIE
       } from '../actions/actionTypes';
import defaultState from '../default-state';

function movieReducer(state = defaultState.movies, action) {
  switch (action.type) {
    case 'RESET_STORE':
      return defaultState.movies;
    case 'LOAD_ONE_MOVIE':
      return {
        ...state,
        selectedMovie: action.movieId,
        selectedMovieStatus: 'LOADING'
      };
    case 'LOAD_ONE_MOVIE_SUCCESS':
      state.data.push(action.movie);
      return {
        ...state,
        data: _.uniqBy(state.data, 'id'),
        selectedMovieStatus: 'LOAD_ONE_MOVIE_SUCCESS'
      };
    case 'LOAD_ONE_MOVIE_FAILED':
      return {
        ...state,
        selectedMovieStatus: 'LOAD_ONE_MOVIE_FAILED'
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
    case 'SELECT_ONE_MOVIE':
      return {
        ...state,
        selectedMovie: action.movieId,
      };
    default:
      return state;
  }
}

export default movieReducer;
