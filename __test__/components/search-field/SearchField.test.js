import React from 'react';
import SearchField from '../../../src/js/components/search-field/SearchField';
import { render, mount } from 'enzyme';

describe('SearchField', () => {
  it('should rendered correctly', () => {
    const component = render(<SearchField />);
    expect(component).toMatchSnapshot();
  });
  
  it('should change the state when input changed', () => {
    const component = mount(<SearchField />);
    //const wrappedInput = component.find('.movie-search-field');
    const wrappedInput = component.find('input');
    wrappedInput.simulate('change', {target: {value: 'input test'}});
    expect(component.state().value).toBe('input test');
  });
});