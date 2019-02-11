import { createSelector} from 'reselect';
import _ from 'lodash';

const moviesLoadingStatus = state => state.movies.status;
const isLoaded = state => ['LOAD_MOVIES_SUCCESS'];

const isMoviesLoaded = (moviesLoadingStatus, isLoaded) => {
  return _.includes(isLoaded, moviesLoadingStatus);
};

export default createSelector(
  moviesLoadingStatus,
  isLoaded,
  isMoviesLoaded
);