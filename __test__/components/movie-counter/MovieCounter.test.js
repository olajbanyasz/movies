import React from 'react';
import MovieCounter from '../../../src/js/components/movie-counter/MovieCounter';
import { mount } from 'enzyme';

describe('MovieCounter', () => {
  it('should rendered correctly', () => {
    const component = mount(<MovieCounter resultcounter={1} />);
    expect(component.props().resultcounter).toBe(1);
    expect(component).toMatchSnapshot();
    expect(component.text()).toBe('1 movie found');
  });
});