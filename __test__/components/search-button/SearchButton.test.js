import React from 'react';
import SearchButton from '../../../src/js/components/search-button/SearchButton.jsx';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
const initialState = {
  search: {
    searchby: 'TITLE',
    phrase: 'test',
    lastSearchPhrase: 'test'
  },
  sortby: 'DATE',
  movies: {
    data: [],
    state: null
  }
};
const mockStore = configureStore();

describe('SearchButton', () => {
  let store;
  
  beforeEach(() => {
    store = mockStore(initialState)
  });
  
  it('should rendered correctly', () => {
    const component = render(<SearchButton store={store}/>);
    expect(component).toMatchSnapshot();
  });
});