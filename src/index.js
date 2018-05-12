import React from 'react';
import ReactDOM from 'react-dom';
import { Client, Provider } from 'urql';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import history from './history';
import AppContainer from './containers/AppContainer';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({ uri: `http://localhost:3001/` });

export default ReactDOM.render(
  <ApolloProvider client={client}>
    <Router {...history}>
      <Route path="/" component={AppContainer} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
