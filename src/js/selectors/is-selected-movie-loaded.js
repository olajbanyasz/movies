import { createSelector} from 'reselect';
import _ from 'lodash';

const movieLoadingStatus = state => state.movies.selectedMovieStatus;
const isLoaded = state => ['LOAD_ONE_MOVIE_SUCCESS'];

const isMovieLoaded = (movieLoadingStatus, isLoaded) => {
  return _.includes(isLoaded, movieLoadingStatus);
};

export default createSelector(
  movieLoadingStatus,
  isLoaded,
  isMovieLoaded
);