import React from 'react';
import Sorter from '../../../src/js/components/sorter/Sorter.jsx';
import { render, mount } from 'enzyme';

describe('Sorter', () => {
  it('should rendered correctly', () => {
    const component = render(<Sorter sortby={'DATE'} changeHandler={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });

  it('the default selected option should get the active class', () => {
    const component = mount(<Sorter sortby={'RATING'} changeHandler={jest.fn()} />);
    expect(component.find('.sort-by-rating').hostNodes().props().className.includes('active')).toBe(true);
    expect(component.find('.sort-by-date').hostNodes().props().className.includes('active')).toBe(false);
  });

  it('should change the component state when selected option changing', () => {
    const component = mount(<Sorter sortby={'DATE'} changeHandler={jest.fn()} />);
    expect(component.find('.sort-by-date').hostNodes().props().className.includes('active')).toBe(true);
    expect(component.state().sortby).toBe(null);
    component.find('.sort-by-rating input').hostNodes().simulate('change', {target: {value: 'RATING'}});
    component.update();
    expect(component.state().sortby).toBe('RATING');
    component.find('.sort-by-date input').hostNodes().simulate('change', {target: {value: 'DATE'}});
    component.update();
    expect(component.state().sortby).toBe('DATE');
  });

  it('should call the changhanler prop on change event', () => {
    const mockHandler = jest.fn();
    const component = mount(<Sorter sortby={'DATE'} changeHandler={mockHandler} />);
    component.find('.sort-by-rating input').hostNodes().simulate('change', {target: {value: 'RATING'}});
    component.update();
    expect(component.props().changeHandler).toHaveBeenCalled();
  });

  it('should call the changhanler prop on change event only once', () => {
    const mockHandler = jest.fn();
    const component = mount(<Sorter sortby={'DATE'} changeHandler={mockHandler} />);
    component.find('.sort-by-rating input').hostNodes().simulate('change', {target: {value: 'RATING'}});
    component.update();
    component.find('.sort-by-rating input').hostNodes().simulate('change', {target: {value: 'RATING'}});
    component.update();
    expect(component.props().changeHandler).toHaveBeenCalledTimes(1);
  });
});