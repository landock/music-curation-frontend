import { getCurations } from '../api';
import fetchMock from 'fetch-mock';

describe('getCurations function', () => {
  it('should return object with curationsById key and array of values', () => {
    const curations = ['1', '2'];
    fetchMock.get(/curations/, curations);
    return getCurations().then(curations => {
      console.log(curations);
      expect(curations).toHaveProperty('curationsById');
    });
  });
});
