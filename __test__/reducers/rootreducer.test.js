import rootreducer from '../../src/js/reducers/';

describe('Sortby Reducer', () => {
  it('should return the default state when action.type is not valid', () => {
    const mockedAction = {
      type: 'NIE_JEST_WLICZONE',
      phrase: 'TEST'
    };
    const expectedState = {
      search: {
        searchby: 'TITLE',
        phrase: ''
      },
      sortby: 'DATE',
      movies: {
        data: [],
        status: null
      }
    };
    expect(rootreducer(expectedState, mockedAction)).toStrictEqual(expectedState);
  });
});