import { getCurations } from './api';

describe('getCurations function', () => {
  beforeEach(() => {
    fetch.resetMocks();
  })
  it('should catch and return errors from the api endpoint', () => {

    fetch.mockReject(new Error('fake error message'))
    getCurations().then(error => {

      expect(error).toHaveProperty('error');

    });
  });

  it('should return object with curationsById key and array of values', () => {
    const mockCurations = ['1', '2'];

    fetch.once(JSON.stringify({mockCurations}));
     getCurations().then(curations => {
      expect(curations).toMatchObject(mockCurations);
    });
  });

});
