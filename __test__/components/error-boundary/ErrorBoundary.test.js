import React from 'react';
import MovieGenre from '../../../src/js/components/movie-genre/MovieGenre';
import ErrorBoundary from '../../../src/js/components/error-boundary/ErrorBoundary';
import { mount } from 'enzyme';

describe('ErrorBoundary', () => {
  it('should render correctly the child component', () => {
    const component = mount
      (
        <ErrorBoundary error={null}>
          <MovieGenre genres={['Drama', 'Sci-Fi']} />
        </ErrorBoundary>
      );
    
    expect(component.find('.movie-genre').length).toBe(1);
  });
  
  it('should not render the child component', () => {
    const component = mount
      (
        <ErrorBoundary error={{error:'error'}}>
          <MovieGenre genres={['Drama', 'Sci-Fi']} />
        </ErrorBoundary>
      );

    expect(component.find('.movie-genre').length).toBe(0);
  });
  
  it('should catch the error and update the state', () => {
    const component = mount
      (
        <ErrorBoundary>
          <MovieGenre genres={['Drama', 'Sci-Fi']} />
        </ErrorBoundary>
      );

    component.instance().componentDidCatch('Something went wrong');
    component.update();
    expect(component.state().error).toBe('Something went wrong');
  });
});