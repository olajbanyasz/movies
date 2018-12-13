import React from 'react';
import App from '../../../src/js/containers/app/App.jsx';
import { render, mount } from 'enzyme';

describe('App', () => {
  it('should rendered correctly', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });

  it('should not render the movie-list', () => {
    const component = mount(<App />);
    component.setState({hasError: {error: 'error'}});
    component.update();
    expect(component.find('.movie-list').length).toBe(0);
  });

  it('should update the state', () => {
    const component = mount(<App />);
    expect(component.state().hasError).toBe(null);
    component.setState({hasError: {error: 'error'}});
    component.update();
    expect(component.state().hasError.error).toBe('error');
  });

  it('should change the state when sorter state changing', () => {
    const component = mount(<App />);
    component.find('.sort-by-rating input').hostNodes().simulate('change', {target: {value: 'RATING'}});
    component.update();
    expect(component.state().sortby).toBe('RATING');
  });

  it('should change the state when searchfilter state changing', () => {
    const component = mount(<App />);
    component.find('.search-by-genre input').hostNodes().simulate('change', {target: {value: 'GENRE'}});
    component.update();
    expect(component.state().searchby).toBe('GENRE');
  });
});