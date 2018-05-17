import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import configureStore from './modules/configureStore';

import AppContainer from './containers/AppContainer';
import history from './history';

import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/finally';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

export default ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={AppContainer} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
