import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import Immutable from 'seamless-immutable';

import reducer, { types, actions } from '../curations';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('curations reducer', () => {
  it('should return initial empty state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should return an Immutable state object', () => {
    const initialState = { test: 'Waddup' };

    const reducedState = reducer(initialState, {});

    expect(reducedState).toEqual({ test: 'Waddup' });
    expect(Immutable.isImmutable(reducedState)).toBe(true);
    expect(Immutable.isImmutable(initialState)).toBe(false);
  });

  it('should handle CURATIONS_FETCHED', () => {
    const initialState = { curationsById: [1, 2, 3] };
    const modifiedState = { curationsById: [4, 5, 6] };
    const expectedAction = {
      type: types.CURATIONS_FETCHED,
      payload: modifiedState,
    };
    const reducedState = reducer(initialState, expectedAction);

    expect(reducedState).toEqual(modifiedState);
  });
});

describe('action creators', () => {
  it('should return a CURATIONS_FETCHED action', () => {
    const payload = { curationsById: ['test1'] };
    const type = types.CURATIONS_FETCHED;
    const expectedAction = {
      type,
      payload,
    };
    expect(actions.curationsFetched(payload)).toEqual(expectedAction);
  });

  it('should fetch data and return a CURATIONS_FETCHED action', () => {
    const store = mockStore({ curationsById: [] });
    const curations = ['1', '2'];
    const expectedActions = [
      { type: types.CURATIONS_FETCHED, payload: { curationsById: curations } },
    ];

    fetchMock.get('*', curations);

    return store.dispatch(actions.fetchCurations()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
