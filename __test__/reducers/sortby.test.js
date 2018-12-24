import sortby from '../../src/js/reducers/sortby';

describe('Sortby Reducer', () => {
  it('should return the expected state', () => {
    const mockedAction = {
      type: 'SORT_MOVIES',
      sortby: 'TEST'
    };
    const expectedState = 'TEST';
    expect(sortby({}, mockedAction)).toStrictEqual(expectedState);
  });
  
  it('should return the expected state when default state is undefined', () => {
    const mockedAction = {
      type: 'SORT_MOVIES',
      sortby: 'TEST'
    };
    const expectedState = 'TEST';
    expect(sortby(undefined, mockedAction)).toStrictEqual(expectedState);
  });
  
  it('should return the default state when action.type is not valid', () => {
    const mockedAction = {
      type: 'NIE_JEST_WLICZONE',
      phrase: 'TEST'
    };
    const expectedState = {
      coś: 'NIE ZMIENIONY'
    };
    expect(sortby(expectedState, mockedAction)).toStrictEqual(expectedState);
  });
});