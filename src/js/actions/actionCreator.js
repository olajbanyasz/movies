import axios from 'axios';

import { 
  SORT_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILED,
  SEARCHBY,
  SEARCH_PHRASE_CHANGE,
  LOAD_MOVIES 
} from './actionTypes';

export const sortMovies = sortby => ({
  type: SORT_MOVIES,
  sortby
});

export const searchBy = searchby => ({
  type: SEARCHBY,
  searchby
});

export const searchPhraseChange = phrase => ({
  type: SEARCH_PHRASE_CHANGE,
  phrase
});

export const loadMoviesRequest = () => ({
  type: LOAD_MOVIES
});

export const loadMoviesSuccess = (response) => { 
  const movies = response.data.data;
  return ({
    type: LOAD_MOVIES_SUCCESS,
    movies
  });
};

export const loadMoviesFailed = (error) => ({
  type: LOAD_MOVIES_FAILED,
  error
});

export const createUrl = (getState) => {
  const state = getState();
  const baseUrl = 'http://react-cdp-api.herokuapp.com/movies';
  const searchBy = '&searchBy=' + ((state.search.searchby === 'TITLE') ? 'title' : 'genres');
  const phrase = '?search=' + state.search.phrase;
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
