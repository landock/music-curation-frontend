import apiMiddleware from './api.js';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import mockStore from '../fixtures/mockStore';

it('should do shit', () => {
  let axiosMock = new MockAdapter(axios);
  axiosMock.onGet(/\/test/).reply(200, [
    {
      id: 1,
      imageUrl: '',
      description: '',
      tracks: [],
      name: 'testssss ',
    },
  ]);

  axiosMock.reset();
  expect(
    apiMiddleware(mockStore())(action => {
      return action;
    })({
      type: 'API_REQUEST',
      reducer: 'curations',
      payload: { url: '/test', params: {} },
    })
  ).resolves.toEqual({});
});
