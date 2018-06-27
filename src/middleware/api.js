import { apiRequest } from '../api';
import { memoize } from 'lodash';

const API_REQUEST = '@@apiMiddleware/API_REQUEST';

const types = {
  API_REQUEST,
};

function configureNextAction(action, payload) {
  if (!action) return action;
  const { action: type } = action;
  return {
    type,
    payload,
  };
}

const apiMiddleware = store => next => action => {
  const { payload, type } = action;

  if (type !== API_REQUEST) return next(action);

  return apiRequest({ ...payload }).then(data => {
    let nextAction = configureNextAction(action, data);
    return next(nextAction);
  });
};

function getData(url, actionToAttachPayloadTo) {
  return {
    type: API_REQUEST,
    action: actionToAttachPayloadTo,
    payload: {
      url,
    },
  };
}
const memoizedGetData = memoize(getData);

export { apiMiddleware as default, types, memoizedGetData as getData };
