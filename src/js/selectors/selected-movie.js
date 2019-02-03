import { createSelector} from 'reselect';
import _ from 'lodash';

const moviesSelector = state => state.movies.data;
const selectedMovieSelector = state => state.movies.selectedMovie;

const getSelectedMovie = (moviesSelector, selectedMovieSelector) => {
  const selectedMovieDetails = _.filter(
    moviesSelector,
    movie => movie.id == selectedMovieSelector
  );
  
  return selectedMovieDetails;
};

export default createSelector(
  moviesSelector,
  selectedMovieSelector,
  getSelectedMovie
);

