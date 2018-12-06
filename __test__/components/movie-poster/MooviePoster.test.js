import React from 'react';
import MoviePoster from '../../../src/js/components/movie-poster/MoviePoster';
import { shallow } from 'enzyme';

describe('MoviePoster', () => {
  it('should rendered correctly', () => {
    const component = shallow(<MoviePoster url={'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg'} />);
    expect(component).toMatchSnapshot();
  });
});