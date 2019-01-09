import React from 'react';
import Sorter from '../../../src/js/components/sorter/Sorter.jsx';
import { render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
const initialState = {
  sortby: 'DATE'
};
const mockStore = configureStore();

describe('Sorter', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState)
  });

  it('should rendered correctly', () => {
    const component = render(<Sorter sortby={'DATE'} changeHandler={jest.fn()} store={store} />);
    expect(component).toMatchSnapshot();
  });

  it('the default selected option should get the active class', () => {
    const component = mount(<Sorter sortby={'RATING'} changeHandler={jest.fn()} store={store} />);
    expect(component.find('.sort-by-rating').hostNodes().props().className.includes('active')).toBe(true);
    expect(component.find('.sort-by-date').hostNodes().props().className.includes('active')).toBe(false);
  });

  it('should change "active" selected option', () => {
    const mockHandler = jest.fn();
    const component = mount(<Sorter searchby={'DATE'} store={store}/>);
    component.find('.sort-by-rating input').hostNodes().simulate('change', {target: {value: 'RATE'}});
    component.update();
    expect(component.find('.sort-by-date').hostNodes().props().className.includes('active')).toBe(false);
    expect(component.find('.sort-by-rating').hostNodes().props().className.includes('active')).toBe(true);
  });
});