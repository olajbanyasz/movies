import React from 'react';
import App from '../../../src/js/containers/app/App.jsx';
import { render, mount } from 'enzyme';
const movies = require('../../../__mocks__/movies.js').data;
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
const initialState = {
  search: {
    searchby: 'TITLE',
    phrase: ''
  },
  sortby: 'DATE',
  movies: {
    data: movies,
    state: 'LOAD_MOVIES_SUCCESS'
  }
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

  it('should render the movie-list', () => {
    const component = mount(<Provider store={store}><App /></Provider>);
    expect(component.find('.movie-list .movie-tile').length).toBe(5);
  });
});