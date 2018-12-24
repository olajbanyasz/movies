import * as actions from '../../src/js/actions/actionCreator'
import * as types from '../../src/js/actions/actionTypes'
import defaultState from '../../src/js/default-state/';

describe('actions', () => {
  it('should create an action to sort movies', () => {
    const sortby = 'DATE';
    const expectedAction = {
      type: types.SORT_MOVIES,
      sortby
    };
    expect(actions.sortMovies('DATE')).toEqual(expectedAction);
  });
  
  it('should create an action to search by movies', () => {
    const searchby = 'TITLE';
    const expectedAction = {
      type: types.SEARCHBY,
      searchby
    };
    expect(actions.searchBy('TITLE')).toEqual(expectedAction);
  });
  
  it('should create an action to load movies', () => {
    const expectedAction = {
      type: types.LOAD_MOVIES
    };
    expect(actions.loadMoviesRequest()).toEqual(expectedAction);
  });
  
  it('should create an action when load movies success', () => {
    const mockedResponse = {
      data: {
        data: [1,2]
      }
    };
    const expectedAction = {
      type: types.LOAD_MOVIES_SUCCESS,
      movies: [1,2]
    };
    expect(actions.loadMoviesSuccess(mockedResponse)).toEqual(expectedAction);
  });
  
  it('should create an action when load movies failed', () => {
    const mockedError = 'error';
    const expectedAction = {
      type: types.LOAD_MOVIES_FAILED,
      error: mockedError
    };
    expect(actions.loadMoviesFailed(mockedError)).toEqual(expectedAction);
  });
  
  it('should create an action to load movies', () => {
    const mockedDispatch = jest.fn();
    const mockedGetState = () => defaultState;
    actions.loadMovies()(mockedDispatch, mockedGetState);
    expect(mockedDispatch).toBe.called;
  });
})