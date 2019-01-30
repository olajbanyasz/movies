import React from 'react';
import { shallow } from 'enzyme';
import MoviePoster from '../../../src/js/components/movie-poster/MoviePoster';

describe('MoviePoster', () => {
  it('should rendered correctly', () => {
    const component = shallow(<MoviePoster url={'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg'} />);
    expect(component).toMatchSnapshot();
  });
});
