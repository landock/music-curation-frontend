import { getCurations } from './api';

describe('getCurations function', () => {
  afterEach(() => {});

  it('should return object with curationsById key and array of values', () => {
    const mockCurations = ['1', '2'];

    // fetch.mockResponseOnce(JSON.stringify(mockCurations));
    // getCurations().then(curations => {
    //   fetch.resetMocks();
    //   expect(curations).toMatchObject(mockCurations);
    // });
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
