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

export const loadMovies = () => (dispatch, getState) => {
  dispatch({ type: LOAD_MOVIES });
  const url = 'http://react-cdp-api.herokuapp.com/movies?sortBy=release_date&sortOrder=desc&limit=12';
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