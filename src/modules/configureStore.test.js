import configureStore from './configureStore';

describe('configureStore', () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  it('should create a store object', () => {
    const expectedState = {
      dispatch: expect.any(Function),
      subscribe: expect.any(Function),
      getState: expect.any(Function),
      replaceReducer: expect.any(Function),
    };

    expect(store).toEqual(expect.objectContaining(expectedState));
  });

  it('should have middleware attached', () => {
    const state = store.getState();
    const expectedState = {
      Curations: expect.any(Object),
      router: expect.any(Object),
    };

    expect(state).toEqual(expect.objectContaining(expectedState));
  });
});
