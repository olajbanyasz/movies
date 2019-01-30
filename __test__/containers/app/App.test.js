import React from 'react';
import { render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../../../src/js/containers/app/App.jsx';

const movies = require('../../../__mocks__/movies.js').data;

const initialState = {
  search: {
    searchby: 'TITLE',
    phrase: '',
  },
  sortby: 'DATE',
  movies: {
    data: movies,
    status: 'LOAD_MOVIES_SUCCESS',
  },
};
const mockStore = configureStore();

describe('App', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should rendered correctly', () => {
    const component = render(<Provider store={store}><App /></Provider>);
    expect(component).toMatchSnapshot();
  });

  it('should not render the movie-list', () => {
    const component = mount(<Provider store={store}><App /></Provider>);
    expect(component.find('.movie-list .movie-tile').length).toBe(0);
  });
});
