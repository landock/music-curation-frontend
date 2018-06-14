import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import Immutable from 'seamless-immutable';

import reducer, { types } from './index';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Curations Reducer', () => {
  it('should return empty state object if undefined state passed in', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle default case when actionType is wahtever', () => {
    const initialState = { curationsById: [1, 2, 3] };
    const expectedAction = {
      type: 'test/ACTION',
      payload: {},
    };
    const reducedState = reducer(initialState, expectedAction);
    expect(reducedState).toEqual(initialState);
  });
});
