import 'cross-fetch/polyfill';

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

const memoizedGetCuration = memoize(getCuration);
const memoizedGetCurations = memoize(getCurations);

export {
  memoizedGetCuration as getCuration,
  memoizedGetCurations as getCurations,
};
