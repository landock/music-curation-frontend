import * as apiRequestClient from './api';
import axios from 'axios';

jest.mock('axios');

describe('apiRequest', () => {
  it('should add a GET method to the arg object if none is included', async () => {
    const axiosConfigForApiRequest = {
      url: '/test',
    };

    await apiRequestClient.apiRequest(axiosConfigForApiRequest);

    return expect(axios.mock.calls[0][0].method).toBe('get');
  });

  it('should add a POST method if the arg object has a data field', async () => {
    const axiosConfigForApiRequest = {
      url: '/test',
      data: { id: 122333 },
    };

    await apiRequestClient.apiRequest(axiosConfigForApiRequest);

    return expect(axios.mock.calls[1][0].method).toBe('post');
  });

  it('concat the url from the config with the baseUrl constant', async () => {
    const urlFragment = '/dougTheShowFromTheNineties';
    const axiosConfigForApiRequest = {
      url: urlFragment,
    };
    const expectedUrl = 'http://localhost:3001' + urlFragment;

    await apiRequestClient.apiRequest(axiosConfigForApiRequest);

    return expect(axios.mock.calls[2][0].url).toBe(expectedUrl);
  });
});

describe('getCurations', () => {
  it('should get data from /curations', async () => {
    const axiosConfigForGetCurations = {
      url: 'http://localhost:3001/curations',
      method: 'get',
    };

    await apiRequestClient.getCurations();

    return expect(axios).toHaveBeenLastCalledWith(axiosConfigForGetCurations);
  });
});

describe('getCuration', () => {
  it('should get data from /curations/:id', async () => {
    const id = 1337;
    const axiosConfigForGetCuration = {
      url: `http://localhost:3001/curations/${id}`,
      method: 'get',
    };

    await apiRequestClient.getCuration(id);

    return expect(axios).toHaveBeenLastCalledWith(axiosConfigForGetCuration);
  });
});

describe('getTrackById', () => {
  it('should get data from /tracks/:id', async () => {
    const id = 231;
    const axiosConfigForGetTrackById = {
      url: `http://localhost:3001/tracks/${id}`,
      method: 'get',
    };

    await apiRequestClient.getTrackById(id);

    return expect(axios).toHaveBeenLastCalledWith(axiosConfigForGetTrackById);
  });
});
