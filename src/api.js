import 'cross-fetch/polyfill';
import axios from 'axios';

import { memoize } from 'lodash';
const url = 'http://localhost:3001';

function getCurations() {
  const getCurationsUrl = `${url}/curations`;

  return fetch(getCurationsUrl)
    .then(response => response.json())
    .catch(error => {
      console.log(error);
      return { error: error };
    });
}

function getCuration(id) {
  const getCurationUrl = `${url}/curations/${id}`;

  return fetch(getCurationUrl)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
      return { error: error };
    });
}

function apiRequest(axiosConfig) {
  if (!axiosConfig.url) return new Error('Need url to do shit');
  if (!axiosConfig.method) {
    if(axiosConfig.data) {
      axiosConfig.method = 'post';
    }
    axiosConfig.method = 'get';
  }
  axiosConfig.url = url + axiosConfig.url;

  return axios(axiosConfig).then(response => {
    return response.data;
  });
}

const memoizedGetCuration = memoize(getCuration);
const memoizedGetCurations = memoize(getCurations);
const memoizedApiRequest = memoize(apiRequest);

export {
  memoizedGetCuration as getCuration,
  memoizedGetCurations as getCurations,
  memoizedApiRequest as apiRequest,
};
