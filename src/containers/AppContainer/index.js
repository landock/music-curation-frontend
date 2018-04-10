import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import './AppContainer.css';
import App from '../../components/App/index';

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return <App />;
  }
}
export default connect()(AppContainer);
