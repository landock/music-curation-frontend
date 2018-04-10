import { getCurations } from './api';
import fetchMock from 'fetch-mock';

describe('getCurations function', () => {
  it('should return object with curationsById key and array of values', () => {
    const mockCurations = ['1', '2'];

    fetchMock.getOnce(/curations/, mockCurations);

    return getCurations().then(curations => {
      expect(curations).toMatchObject(mockCurations);
    });
  });

  it('should catch and return errors from the api endpoint', () => {
    fetchMock.get(
      /curations/,
      { status: 500, body: '{}' },
      { overwriteRoutes: false }
    );
    return getCurations().then(error => {
      // expect(error).toHaveProperty('error');
    });
  });
});
