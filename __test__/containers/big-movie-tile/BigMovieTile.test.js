import React from 'react';
import BigMovieTile from '../../../src/js/containers/big-movie-tile/BigMovieTile.jsx';
import { render } from 'enzyme';
const movies = require('../../../__mocks__/movies.js').data;

describe('BigMovieTile', () => {
  it('should rendered correctly', () => {
    const mockedMovieDetails = movies[0];
    const component = render(<BigMovieTile movieDetails={mockedMovieDetails} />);
    expect(component).toMatchSnapshot();
  });
});