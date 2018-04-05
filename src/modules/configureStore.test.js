import configureStore from './configureStore';

describe('configureStore', () => {
  it('should create a store object', () => {
    const store = configureStore();

    expect(store).toEqual(
      expect.objectContaining({
        dispatch: expect.any(Function),
        subscribe: expect.any(Function),
        getState: expect.any(Function),
        replaceReducer: expect.any(Function),
      })
    );
  });

  it('should have middleware attached', () => {
    const store = configureStore();
    expect(store.getState()).toEqual(
      expect.objectContaining({
        Curations: expect.any(Object),
        router: expect.any(Object),
      })
    );
  });
});
