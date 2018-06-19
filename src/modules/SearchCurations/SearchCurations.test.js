
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import reducer, { types, actions } from '.';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('SearchCurations Reducer', () => {
  it('should return empty state object if undefined state passed in', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
});