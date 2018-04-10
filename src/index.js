import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import configureStore from './modules/configureStore';

import AppContainer from './containers/AppContainer';
import CurationsContainer from './containers/CurationsContainer';
import history from './history';

import './index.css';

const store = configureStore();

export default ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={CurationsContainer} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
