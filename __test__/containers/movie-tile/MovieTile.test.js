import React from 'react';
import MovieTile from '../../../src/js/containers/movie-tile/MovieTile.jsx';
import { render } from 'enzyme';

describe('MovieTile', () => {
  it('should rendered correctly', () => {
    const mockedMovieDetails = {
      id: 238,
      title: "The Godfather",
      tagline: "An offer you can't refuse.",
      vote_average: 8.5,
      vote_count: 7437,
      release_date: "1972-03-14",
      poster_path: "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
      overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      budget: 6000000,
      revenue: 245066411,
      genres: [ "Drama", "Crime" ],
      runtime: 175
    };
    const component = render(<MovieTile movieDetails={mockedMovieDetails} />);
    expect(component).toMatchSnapshot();
  });
});