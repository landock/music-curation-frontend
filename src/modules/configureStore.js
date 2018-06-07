import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import history from '../history';
import Curations from './Curations';
import Tracks from './Tracks';
import apiMiddleware from '../middleware/api';

const rootReducer = combineReducers({
  router: routerReducer,
  Tracks,
  Curations,
});

const createStoreWithMiddleware = (reducer, initialState = {}) => {
  const middleware = routerMiddleware(history);
  const loggerMiddleware = createLogger();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(loggerMiddleware, middleware, apiMiddleware, thunk)
    )
  );
};

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}
