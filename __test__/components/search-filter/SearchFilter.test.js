import React from 'react';
import { render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import SearchFilter from '../../../src/js/components/search-filter/SearchFilter.jsx';

const initialState = {
  search: {
    searchby: 'TITLE',
    phrase: '',
  },
};
const mockStore = configureStore();

describe('SearchFilter', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should rendered correctly', () => {
    const component = render(<SearchFilter searchby={'TITLE'} changeHandler={jest.fn()} store={store}/>);
    expect(component).toMatchSnapshot();
  });

  it('the default selected option should get the active class', () => {
    const mockHandler = jest.fn();
    const component = mount(<SearchFilter searchby={'TITLE'} searchBy={mockHandler} store={store}/>);
    expect(component.find('.search-by-title').hostNodes().props().className.includes('active')).toBe(true);
    expect(component.find('.search-by-genre').hostNodes().props().className.includes('active')).toBe(false);
  });

  it('should change "active" selected option', () => {
    const mockHandler = jest.fn();
    const component = mount(<SearchFilter searchby={'TITLE'} searchBy={mockHandler} store={store}/>);
    component.find('.search-by-genre input').hostNodes().simulate('change', { target: { value: 'GENRE' } });
    component.update();
    expect(component.find('.search-by-title').hostNodes().props().className.includes('active')).toBe(false);
    expect(component.find('.search-by-genre').hostNodes().props().className.includes('active')).toBe(true);
  });
});
