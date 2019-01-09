import search from '../../src/js/reducers/search';

describe('Search Reducer', () => {
  it('should return the expected state', () => {
    const mockedAction = {
      type: 'SEARCHBY',
      searchby: 'TEST'
    };
    const expectedState = {
      searchby: 'TEST'
    };
    expect(search({}, mockedAction)).toStrictEqual(expectedState);
  });
  
  it('should return the expected state', () => {
    const mockedAction = {
      type: 'SEARCH_PHRASE_CHANGE',
      phrase: 'TEST'
    };
    const expectedState = {
      phrase: 'TEST'
    };
    expect(search({}, mockedAction)).toStrictEqual(expectedState);
  });

  it('should return the expected state', () => {
    const mockedAction = {
      type: 'PERSIST_LAST_SEARCH_PHRASE',
      lastSearchPhrase: 'TEST'
    };
    const expectedState = {
      lastSearchPhrase: 'TEST'
    };
    expect(search({}, mockedAction)).toStrictEqual(expectedState);
  });
  
  it('should return the expected state when default state is undefined', () => {
    const mockedAction = {
      type: 'SEARCH_PHRASE_CHANGE',
      phrase: 'TEST'
    };
    const expectedState = {
      phrase: 'TEST',
      searchby: 'TITLE',
      lastSearchPhrase: ''
    };
    expect(search(undefined, mockedAction)).toStrictEqual(expectedState);
  });
  
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
    expect(search(expectedState, mockedAction)).toStrictEqual(expectedState);
  });
});