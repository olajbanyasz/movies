import { createSelector} from 'reselect';
import _ from 'lodash';

const movieLoadingStatus = state => state.movies.selectedMovieStatus;
const isLoadFailed = state => ['LOAD_ONE_MOVIE_FAILED'];

const isMovieLoadFailed = (movieLoadingStatus, isLoadFailed) => {
  return _.includes(isLoadFailed, movieLoadingStatus);
};

export default createSelector(
  movieLoadingStatus,
  isLoadFailed,
  isMovieLoadFailed
);