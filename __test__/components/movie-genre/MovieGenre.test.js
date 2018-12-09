import React from 'react';
import MovieGenre from '../../../src/js/components/movie-genre/MovieGenre';
import { shallow } from 'enzyme';

describe('MovieGenre', () => {
  it('should rendered correctly', () => {
    const component = shallow(<MovieGenre genres={['Drama', 'Sci-Fi']} />);
    expect(component).toMatchSnapshot();
  });
});