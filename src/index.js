import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import configureStore from './redux/configureStore';

import AppContainer from './containers/AppContainer';
import history from './history';

import './index.css';

const store = configureStore();
console.log(store.getState(), configureStore);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={AppContainer} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
