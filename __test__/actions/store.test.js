import configStore from '../../src/js/actions/store';
const { store } = configStore();
import defaultState from '../../src/js/default-state/';

describe('store', () => {
  it('should have a getState method witch give back the default state', () => {
    const expectedState = { 
      ...defaultState, 
      _persist: {
        'rehydrated': true,
        'version': -1,
      }
    };
    expect(store.getState()).toEqual(expectedState);
  });
});