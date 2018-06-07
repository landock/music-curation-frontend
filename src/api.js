import { memoize } from 'lodash';
import axios from 'axios';

const baseUrl = 'http://localhost:3001';

async function apiRequest(axiosConfig) {
  if (!axiosConfig.url) return new Error('Need url to do shit');
  if (!axiosConfig.method) {
    if (axiosConfig.data) {
      axiosConfig.method = 'post';
    }
    axiosConfig.method = 'get';
  }
  axiosConfig.url = baseUrl + axiosConfig.url;

  try {
    const response = await axios(axiosConfig);
    console.log('response: ', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

function getCurations() {
  const url = '/curations';
  return apiRequest({ url });
}

function getCuration(id) {
  const url = `/curations/${id}`;
  return apiRequest({ url });
}

function getTrackById(id) {
  const url = `/tracks/${id}`;
  return apiRequest({ url });
}

const memoizedGetCuration = memoize(getCuration);
const memoizedGetCurations = memoize(getCurations);

export { getCuration, getCurations, apiRequest, getTrackById };
