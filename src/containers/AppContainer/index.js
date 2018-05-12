import React, { Component } from 'react';
import autoBind from 'react-autobind';

import './AppContainer.css';
import App from '../../components/App/index';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return <App />;
  }
}
