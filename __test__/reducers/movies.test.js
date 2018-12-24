import movies from '../../src/js/reducers/movies';

describe('Sortby Reducer', () => {
  it('should return the expected state', () => {
    const mockedAction = {
      type: 'LOAD_MOVIES'
    };
    const expectedState = {
      state: 'LOADING'
    };
    expect(movies({}, mockedAction)).toStrictEqual(expectedState);
  });
  
  it('should return the expected state', () => {
    const mockedAction = {
      type: 'LOAD_MOVIES_SUCCESS',
      movies: ['test']
    };
    const expectedState = {
      data: ['test'],
      state: 'LOAD_MOVIES_SUCCESS'
    };
    expect(movies({}, mockedAction)).toStrictEqual(expectedState);
  });
  
    it('should return the expected state', () => {
    const mockedAction = {
      type: 'LOAD_MOVIES_FAILED',
      movies: ['test']
    };
    const expectedState = {
      data: [],
      state: 'LOAD_MOVIES_FAILED'
    };
    expect(movies({}, mockedAction)).toStrictEqual(expectedState);
  });
  
  it('should return the default state when action.type is not valid', () => {
    const mockedAction = {
      type: 'NIE_JEST_WLICZONE',
      phrase: 'TEST'
    };
    const expectedState = {
      coś: 'NIE ZMIENIONY'
    };
    expect(movies(expectedState, mockedAction)).toStrictEqual(expectedState);
  });
});