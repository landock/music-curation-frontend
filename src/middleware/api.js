import axios from 'axios';
import { memoize } from 'lodash';

const API_REQUEST = '@@apiMiddleware/API_REQUEST';

const baseUrl = 'http://localhost:3001';
const types = {
  API_REQUEST,
};

function configureNextAction(action, payload) {
  const { nextActionType } = action;
  if (!nextActionType) return action;

  return {
    type: nextActionType,
    payload,
  };
}

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
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const apiMiddleware = store => next => action => {
  if (action.type !== API_REQUEST) return next(action);
  const { payload } = action;

  return apiRequest({ ...payload }).then(data => {
    let nextAction = configureNextAction(action, data);
    return next(nextAction);
  });
};

export { apiMiddleware as default, types };
