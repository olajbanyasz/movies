import axios from 'axios';
import actionTypes from './actionTypes';
const baseUrl = 'http://react-cdp-api.herokuapp.com/movies';

export const sortMovies = sortby => ({
  type: actionTypes.SORT_MOVIES,
  sortby
});

export const searchBy = searchby => ({
  type: actionTypes.SEARCHBY,
  searchby
});

export const searchPhraseChange = phrase => ({
  type: actionTypes.SEARCH_PHRASE_CHANGE,
  phrase
});

export const loadMoviesRequest = () => ({
  type: actionTypes.LOAD_MOVIES
});

export const persistLastSearchPhrase = (lastSearchPhrase) => {
  return ({
    type: actionTypes.PERSIST_LAST_SEARCH_PHRASE,
    lastSearchPhrase
  });
};

export const selectMovie = (movie) => ({
  type: actionTypes.SELECT_MOVIE,
  movie
});

export const resetStore = () => ({
  type: actionTypes.RESET_STORE,
});

export const createUrl = (getState) => {
  const state = getState();
  const searchBy = '&searchBy=' + ((state.search.searchby === 'TITLE') ? 'title' : 'genres');
  const phrase = '?search=' + state.search.lastSearchPhrase;
  const order = '&sortOrder=desc';
  const limit = '&limit=12';
  return baseUrl + phrase + searchBy + order + limit;
}

export const loadMovies = () => (dispatch, getState) => {
  dispatch(loadMoviesRequest());
  const url = createUrl(getState);
  return axios
    .get(url)
    .then( response => dispatch(loadMoviesSuccess(response)))
    .catch( error => dispatch(loadMoviesFailed(error)));
};

export const loadMoviesFailed = () => ({
  type: actionTypes.LOAD_MOVIES_FAILED,
});

export const loadMovieSuccess = (response) => {
  const movie = response;
  return ({
    type: actionTypes.LOAD_MOVIE_SUCCESS,
    movie
  });
};

export const loadMovieRequest = () => ({
  type: actionTypes.LOAD_MOVIE
});

export const loadMovieFailed = () => ({
  type: actionTypes.LOAD_MOVIE_FAILED,
});

export const loadMovie = (id) => (dispatch, id) => {
  dispatch(loadMovieRequest());
  return axios
    .get(baseUrl+'/'+ id)
    .then( response => { if (response.id == id) {
        dispatch(loadMovieSuccess(response))
      } else {
        dispatch(loadMovieFailed())
      }
    })
    .catch( error => dispatch(loadMovieFailed()));
};
