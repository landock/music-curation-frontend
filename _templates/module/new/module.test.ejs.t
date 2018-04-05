---
to: src/modules/<%= h.pascalCase(name) %>/<%= h.pascalCase(name) %>.test.js
---
<% const module = h.pascalCase(name) %>
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import reducer, { types, actions } from '.';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('<%= module %> Reducer', () => {
  it('should return empty state object if undefined state passed in', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
});