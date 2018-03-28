import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import reducer, { types, actions } from '../curations';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('curations reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
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
      console.log(store.getActions());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
