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

const apiMiddleware = apiClient => store => next => async action => {
  const { payload, type } = action;

  if (type !== API_REQUEST) return next(action);

  const data = await apiClient({ ...payload });
  let nextAction = configureNextAction(action, data);
  return store.dispatch(nextAction);
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

export {
  apiMiddleware as default,
  types,
  memoizedGetData as getData,
  configureNextAction,
};
