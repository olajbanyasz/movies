import React from 'react';
import BigMovieTile from '../../../src/js/containers/big-movie-tile/BigMovieTile.jsx';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
const movies = require('../../../__mocks__/movies.js').data;
const mockStore = configureStore();
import defaultState from '../../../src/js/default-state/';
defaultState.movies.selectedMovie = movies[0];

describe('BigMovieTile', () => {
  let store;
  beforeEach(() => {
    store = mockStore(defaultState);
  });
  
  it('should rendered correctly', () => {
    const component = render(<Provider store={store}><BigMovieTile /></Provider>);
    expect(component).toMatchSnapshot();
  });
});