import { createSelector} from 'reselect';
import _ from 'lodash';

const moviesLoadingStatus = state => state.movies.status;
const isLoading = state => ['LOADING'];

const isMoviesLoading = (moviesLoadingStatus, isLoading) => {
  return _.includes(isLoading, moviesLoadingStatus);
};

export default createSelector(
  moviesLoadingStatus,
  isLoading,
  isMoviesLoading
);