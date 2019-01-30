import axios from 'axios';
import actionTypes from './actionTypes';

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

export const selectMovie = movie => ({
  type: actionTypes.SELECT_MOVIE,
  movie,
});

export const resetStore = () => ({
  type: actionTypes.RESET_STORE,
});

export const createUrl = (getState) => {
  const state = getState();
  const baseUrl = 'http://react-cdp-api.herokuapp.com/movies';
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
