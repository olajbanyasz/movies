import React from 'react';
import MovieList from '../../../src/js/containers/movie-list/MovieList.jsx';
import { render } from 'enzyme';

describe('MovieList', () => {
    it('should rendered correctly without any movie', () => {
    const mockedMovies = [];
    const component = render(<MovieList movies={mockedMovies} />);
    expect(component).toMatchSnapshot();
  });
  it('should rendered correctly with 2 movies', () => {
    const mockedMovies = [{
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
    },
    {
      id: 418827,
      title: "Sister's Younger Husband",
      tagline: "A sexy brother-in-law approached her? And he’s a younger man?",
      vote_average: 8.5,
      vote_count: 2,
      release_date: "2016-10-11",
      poster_path: "https://image.tmdb.org/t/p/w500/wKCkyb7dyDTbZn7qy6zh8oqtFrT.jpg",
      overview: "A sexy brother-in-law approached her? And he’s a younger man? Mi-yeon, who was adopted into her family when she was little, is living with her older sister, Si-yeon and Si-yeon’s husband. Mi-yeon’s desire towards her brother-in-law grows more and more every night when she gets to watch the affectionate interaction between her older sister and the brother-in-law. One day, Mi-yeon seduces her brother-in-law and the two end up crossing the line when they should not have. As the situation goes on, Mi-yeon finds out her older sister is also having affairs outside the marriage. Mi-yeon tries to clear up the relationship with her brother-in-law out of guilty feeling. However, she hears something shocking from the brother-in-law.",
      budget: 0,
      revenue: 0,
      genres: ["Comedy","Drama","Romance"],
      runtime: 75
    }];
    const component = render(<MovieList movies={mockedMovies} />);
    expect(component).toMatchSnapshot();
  });
});