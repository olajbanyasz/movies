import React from 'react';
import MovieTile from '../../../src/js/containers/movie-tile/MovieTile.jsx';
import { render } from 'enzyme';
const movies = require('../../../__mocks__/movies.js').data;

describe('MovieTile', () => {
  it('should rendered correctly', () => {
    const mockedMovieDetails = movies[0];
    const component = render(<MovieTile movieDetails={mockedMovieDetails} />);
    expect(component).toMatchSnapshot();
  });
});