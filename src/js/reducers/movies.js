import actionTypes from '../actions/actionTypes'
import defaultState from '../default-state';

function movieReducer(state = defaultState.movies, action) {
  switch (action.type) {
    case actionTypes.RESET_STORE:
      return defaultState.movies;
    case actionTypes.LOAD_ONE_MOVIE:
      return {
        ...state,
        selectedMovie: action.movieId,
        selectedMovieStatus: 'LOADING'
      };
    case actionTypes.LOAD_ONE_MOVIE_SUCCESS:
      state.data.push(action.movie);
      return {
        ...state,
        data: _.uniqBy(state.data, 'id'),
        selectedMovieStatus: 'LOAD_ONE_MOVIE_SUCCESS'
      };
    case actionTypes.LOAD_ONE_MOVIE_FAILED:
      return {
        ...state,
        selectedMovieStatus: 'LOAD_ONE_MOVIE_FAILED'
      };
    case actionTypes.LOAD_MOVIES:
      return {
        ...state,
        status: 'LOADING',
      };
    case actionTypes.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.movies,
        status: 'LOAD_MOVIES_SUCCESS',
      };
    case actionTypes.LOAD_MOVIES_FAILED:
      return {
        ...state,
        data: [],
        status: 'LOAD_MOVIES_FAILED',
      };
    case actionTypes.SELECT_ONE_MOVIE:
      return {
        ...state,
        selectedMovie: action.movieId,
      };
    default:
      return state;
  }
}

export default movieReducer;
