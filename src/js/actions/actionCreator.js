import axios from 'axios';

import { 
  SORT_MOVIES,
  LOAD_MOVIES_SUCCESS,
  SEARCHBY,
  SEARCH_PHRASE_CHANGE,
  LOAD_MOVIES 
} from './actionTypes';

export const sortMovies = sortby => ({
  type: SORT_MOVIES,
  sortby
});

export const loadMoviesSuccess = movies => ({
  type: LOAD_MOVIES_SUCCESS,
  movies
});

export const searchBy = searchby => ({
  type: SEARCHBY,
  searchby
});

export const searchPhraseChange = phrase => ({
  type: SEARCH_PHRASE_CHANGE,
  phrase
});

const createUrl = (getState) => {
  const baseUrl = 'http://react-cdp-api.herokuapp.com/movies';
  const searchBy = '&searchBy=' + ((getState().search.searchby === 'TITLE') ? 'title' : 'genre');
  const phrase = '?search=' + getState().search.phrase;
  const order = '&sortOrder=desc';
  const limit = '&limit=12';
  return baseUrl + phrase + searchBy + order + limit;
}

export const loadMovies = () => (dispatch, getState) => {
  dispatch({ type: LOAD_MOVIES });
  const url = createUrl(getState);
  axios
    .get(url)
    .then( response => {
      const movies = response.data.data;
      dispatch({ type: LOAD_MOVIES_SUCCESS, movies });
    })
    .catch( error => {
      dispatch({ type: LOAD_MOVIES_FAILED, error });
    });
};
