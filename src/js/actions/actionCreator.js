import axios from 'axios';
import actionTypes from './actionTypes';
const baseUrl = 'http://react-cdp-api.herokuapp.com/movies';

export const loadMovieSuccess = (movie) => {
  return ({
    type: actionTypes.LOAD_ONE_MOVIE_SUCCESS,
    movie
  });
};

export const loadMovieRequest = (movieId) => ({
  type: actionTypes.LOAD_ONE_MOVIE,
  movieId
});

export const loadMovieFailed = () => ({
  type: actionTypes.LOAD_ONE_MOVIE_FAILED,
});

export const loadOneMovie = () => (dispatch, getState) => {
  const id = getState().movies.selectedMovie;
  dispatch(loadMovieRequest(id));
  return axios
    .get(baseUrl +'/' + id)
    .then( response => dispatch(loadMovieSuccess(response.data)))
    .catch( error => dispatch(loadMovieFailed()));
};

export const sortMovies = sortby => ({
  type: actionTypes.SORT_MOVIES,
  sortby,
});

export const searchBy = searchby => ({
  type: actionTypes.SEARCHBY,
  searchby,
});

export const searchPhraseChange = phrase => ({
  type: actionTypes.SEARCH_PHRASE_CHANGE,
  phrase,
});

export const loadMoviesRequest = () => ({
  type: actionTypes.LOAD_MOVIES,
});

export const persistLastSearchPhrase = lastSearchPhrase => ({
  type: actionTypes.PERSIST_LAST_SEARCH_PHRASE,
  lastSearchPhrase,
});


export const loadMoviesSuccess = (response) => {
  const movies = response.data.data;
  return ({
    type: actionTypes.LOAD_MOVIES_SUCCESS,
    movies,
  });
};

export const loadMoviesFailed = error => ({
  type: actionTypes.LOAD_MOVIES_FAILED,
  error,
});

export const selectMovie = movieId => ({
  type: actionTypes.SELECT_ONE_MOVIE,
  movieId,
});

export const resetStore = () => ({
  type: actionTypes.RESET_STORE,
});

export const createUrl = (getState) => {
  const state = getState();
  const searchBy = `&searchBy=${(state.search.searchby === 'TITLE') ? 'title' : 'genres'}`;
  const phrase = `?search=${state.search.lastSearchPhrase}`;
  const order = '&sortOrder=desc';
  const limit = '&limit=12';
  return baseUrl + phrase + searchBy + order + limit;
};

export const loadMovies = () => (dispatch, getState) => {
  dispatch(loadMoviesRequest());
  const url = createUrl(getState);
  return axios
    .get(url)
    .then(response => dispatch(loadMoviesSuccess(response)))
    .catch(error => dispatch(loadMoviesFailed(error)));
};
