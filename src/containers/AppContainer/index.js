// @flow
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import './AppContainer.scss';
import App from '../../components/App';

type State = {};
type Props = {};
export class AppContainer extends Component<State, Props> {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return <App />;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
