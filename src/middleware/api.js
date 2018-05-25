import { apiRequest } from '../api';
import { types as curationTypes } from '../modules/Curations';

const API_REQUEST = 'API_REQUEST';

const apiUrl = 'http://localhost:3001';

function configureNextAction(action, payload) {
  const { reducer  } = action;
  if (!reducer) return action;
  switch (reducer) {
    case 'curations':
      return {
        type: curationTypes.CURATIONS_FETCHED,
        payload,
      };

    default:
      return action;
  }
}

const apiMiddleware = store => next => action => {
  if (action.type !== API_REQUEST || !action.reducer) return next(action);

  const { payload } = action;
  return apiRequest(payload).then(data => {
    let nextAction = configureNextAction(action, data);
    return next(nextAction);
  });
};

export default apiMiddleware;
