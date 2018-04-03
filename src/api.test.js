import { getCurations } from './api';
import fetchMock from 'fetch-mock';

describe('getCurations function', () => {
  it('should return object with curationsById key and array of values', () => {
    const mockCurations = ['1', '2'];
    const expectedResult = { curationsById: mockCurations };

    fetchMock.get(/curations/, mockCurations);

    return getCurations().then(curations => {
      expect(curations).toMatchObject(expectedResult);
    });
  });
});
