import React from 'react';
import { render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import FormContainer from '../../../src/js/containers/form-container/FormContainer.jsx';

const movies = require('../../../__mocks__/movies.js').data;

const initialState = {
  search: {
    searchby: 'TITLE',
    phrase: '',
  },
  sortby: 'DATE',
  movies: {
    data: movies,
    state: 'LOAD_MOVIES_SUCCESS',
  },
};
const mockStore = configureStore();

describe('FormContainer', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should rendered correctly', () => {
    const component = render(<Provider store={store}>
                            <FormContainer
                              movies={[]}
                              searchby={'TITLE'}
                              sortby={'DATE'}
                            />
                          </Provider>);
    expect(component).toMatchSnapshot();
  });
});
