import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import curations from './modules/curations';
import history from '../history';

const loggerMiddleware = createLogger(); // initialize log
const middleware = routerMiddleware(history);

const reducer = combineReducers({
  router: routerReducer,
  curations,
});

const createStoreWithMiddleware = (reducer, initialState = {}) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, middleware, loggerMiddleware))
  );
};

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  return store;
}
