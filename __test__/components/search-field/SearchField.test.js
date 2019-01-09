import React from 'react';
import SearchField from '../../../src/js/components/search-field/SearchField';
import { render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
const initialState = {
  search: {
    searchby: 'TITLE',
    phrase: ''
  }
};
const mockStore = configureStore();

describe('SearchField', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState)
  });

  it('should rendered correctly', () => {
    const component = render(<SearchField store={store}/>);
    expect(component).toMatchSnapshot();
  });
  
  it('should call the searchPhraseChange props on change event', () => {
    const mockedProp = jest.fn();
    const component = mount(<SearchField searchPhraseChange={mockedProp} store={store}/>);
    const wrappedInput = component.find('.movie-search-field').hostNodes();
    wrappedInput.simulate('change', {target: {value: 'input test'}});
    component.update();
    expect(mockedProp).toBe.called;
  });
});