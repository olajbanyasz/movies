import React from 'react';
import SearchFilter from '../../../src/js/components/search-filter/SearchFilter.jsx';
import { render, mount } from 'enzyme';

describe('SearchFilter', () => {
  it('should rendered correctly', () => {
    const component = render(<SearchFilter searchby={'TITLE'} changeHandler={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('should change the component state when selected option changing', () => {
    const component = mount(<SearchFilter searchby={'TITLE'} changeHandler={() => {}} />);
    expect(component.find('.search-by-title').hostNodes().props().className.includes('active')).toBe(true);
    expect(component.state().searchby).toBe(null);
    component.find('.search-by-genre input').hostNodes().simulate('change', {target: {value: 'GENRE'}});
    component.update();
    expect(component.state().searchby).toBe('GENRE');
    component.find('.search-by-title input').hostNodes().simulate('change', {target: {value: 'TITLE'}});
    component.update();
    expect(component.state().searchby).toBe('TITLE');
  });
});