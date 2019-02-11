import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../src/js/actions/actionCreator';
import actionTypes from '../../src/js/actions/actionTypes';
import defaultState from '../../src/js/default-state';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockSuccess = response => ({ status: 200, response });
const makeMockStore = (state = defaultState) => mockStore(
  state,
);

describe('actions', () => {
  it('should create an action to sort movies', () => {
    const sortby = 'DATE';
    const expectedAction = {
      type: actionTypes.SORT_MOVIES,
      sortby,
    };
    expect(actions.sortMovies('DATE')).toEqual(expectedAction);
  });

  it('should create an action to search by movies', () => {
    const searchby = 'TITLE';
    const expectedAction = {
      type: actionTypes.SEARCHBY,
      searchby,
    };
    expect(actions.searchBy('TITLE')).toEqual(expectedAction);
  });

  it('should create an action to persist last search phrase', () => {
    const lastSearchPhrase = 'TEST';
    const expectedAction = {
      type: actionTypes.PERSIST_LAST_SEARCH_PHRASE,
      lastSearchPhrase,
    };
    expect(actions.persistLastSearchPhrase('TEST')).toEqual(expectedAction);
  });

  it('should create an action to load movies', () => {
    const expectedAction = {
      type: actionTypes.LOAD_MOVIES,
    };
    expect(actions.loadMoviesRequest()).toEqual(expectedAction);
  });

  it('should create an action when load movies success', () => {
    const mockedResponse = {
      data: {
        data: [],
      },
    };
    const expectedAction = {
      type: actionTypes.LOAD_MOVIES_SUCCESS,
      movies: [],
    };
    expect(actions.loadMoviesSuccess(mockedResponse)).toEqual(expectedAction);
  });

  it('should create an action when load movies failed', () => {
    const mockedError = 'error';
    const expectedAction = {
      type: actionTypes.LOAD_MOVIES_FAILED,
      error: mockedError,
    };
    expect(actions.loadMoviesFailed(mockedError)).toEqual(expectedAction);
  });

  it('should create an action to load movies', () => {
    const mockedDispatch = jest.fn();
    const mockedGetState = () => defaultState;
    actions.loadMovies()(mockedDispatch, mockedGetState);
    expect(mockedDispatch).toBe.called;
  });

  it('should create an action to load movies', () => {
    const mockedDispatch = jest.fn();
    defaultState.search.searchby = 'GENRE';
    const mockedGetState = () => defaultState;
    actions.loadMovies()(mockedDispatch, mockedGetState);
    expect(mockedDispatch).toBe.called;
  });
});

describe('async actions', () => {
  let store;
  const response = {
    data: {
      data: [1, 2],
    },
  };
  beforeEach(() => {
    moxios.install();
    store = makeMockStore();
  });
  afterEach(() => moxios.uninstall());

  it('dispatches loadMoviesSuccess on success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(response.data));
    });
    const expected = [
      actions.loadMoviesRequest(),
      actions.loadMoviesSuccess(response),
    ];
    return store.dispatch(actions.loadMovies())
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
  });

  it('dispatches loadMoviesFailed on error', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500, error: 'error' });
    });
    const expected = [
      actions.loadMoviesRequest(),
      actions.loadMoviesFailed('error'),
    ];

    return store.dispatch(actions.loadMovies())
      .catch(() => {
        expect(store.getActions()).toEqual(expected);
      });
  });
});
