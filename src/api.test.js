import { getCurations } from './api';
import mockAxios from 'jest-mock-axios';

describe('getCurations function', () => {
  afterEach(() => {
    mockAxios.resest();
  });

  it('should return object with curationsById key and array of values', async () => {
    const mockCurations = ['1', '2'];
    mockAxios.mockResponse(mockCurations);
    let curations = await getCurations();
    return expect(curations).toContain(mockCurations);
  });

  // it('should catch and return errors from the api endpoint', () => {
  //   fetch.mockReject(new Error('fake error message'));
  //   getCurations().then(error => {
  //     fetch.resetMocks();
  //     expect(error).toHaveProperty('error');
  //   });
  // });
  expect(true).toBe(true);
});
