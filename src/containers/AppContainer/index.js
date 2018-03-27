// @flow
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import './AppContainer.scss';

type State = {};
type Props = {};
class AppContainer extends Component<State, Props> {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
