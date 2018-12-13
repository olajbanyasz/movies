import React from 'react';
import MovieList from '../../../src/js/containers/movie-list/MovieList.jsx';
import { render } from 'enzyme';
const movies = require('../../../__mocks__/movies.js').data;

describe('MovieList', () => {
    it('should rendered correctly without any movie', () => {
    const mockedMovies = [];
    const component = render(<MovieList movies={mockedMovies} />);
    expect(component).toMatchSnapshot();
  });
  it('should rendered correctly with 2 movies', () => {
    const mockedMovies = movies.splice(0, 2);
    const component = render(<MovieList movies={mockedMovies} />);
    expect(component).toMatchSnapshot();
  });
});