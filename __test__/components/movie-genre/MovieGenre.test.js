import React from 'react';
import { shallow } from 'enzyme';
import MovieGenre from '../../../src/js/components/movie-genre/MovieGenre';

describe('MovieGenre', () => {
  it('should rendered correctly', () => {
    const component = shallow(<MovieGenre genres={['Drama', 'Sci-Fi']} />);
    expect(component).toMatchSnapshot();
  });
});
