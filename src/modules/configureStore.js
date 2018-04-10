import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import history from '../history';
import Curations from './Curations';

const rootReducer = combineReducers({
  router: routerReducer,
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
    composeEnhancers(applyMiddleware(thunk, loggerMiddleware, middleware))
  );
};

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}
