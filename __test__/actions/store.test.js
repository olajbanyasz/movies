import store from '../../src/js/actions/store';
import defaultState from '../../src/js/default-state/';

describe('store', () => {
  it('should have a getState method witch give back the default state', () => {
    expect(store.getState()).toEqual(defaultState);
  });
});