import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MovieList from '../../../src/js/containers/movie-list/MovieList.jsx';

const movies = require('../../../__mocks__/movies.js').data;

const initialState = {
  search: {
    searchby: 'TITLE',
    phrase: '',
  },
  sortby: 'DATE',
  movies: {
    data: movies,
    state: 'LOAD_MOVIES_SUCCESS',
  },
};
const mockStore = configureStore();

describe('MovieList', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should rendered correctly without any movie', () => {
    const mockedMovies = [];
    const component = render(<MovieList store={store} />);
    expect(component).toMatchSnapshot();
  });
  it('should rendered correctly with 2 movies', () => {
    const mockedMovies = movies.splice(0, 2);
    const component = render(<MovieList store={store} />);
    expect(component).toMatchSnapshot();
  });
  it('should rendered correctly with loding text', () => {
    const mockedMovies = movies.splice(0, 2);
    const component = render(<MovieList store={store} />);
    expect(component).toMatchSnapshot();
  });
});
