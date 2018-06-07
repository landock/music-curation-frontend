import { apiRequest } from '../api';

const API_REQUEST = '@@apiMiddleware/API_REQUEST';

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

const apiMiddleware = store => next => action => {
  if (action.type !== API_REQUEST) return next(action);
  const { payload } = action;

  return apiRequest({ ...payload }).then(data => {
    let nextAction = configureNextAction(action, data);
    return next(nextAction);
  });
};

export { apiMiddleware as default, types };
