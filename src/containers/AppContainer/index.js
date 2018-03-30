// @flow
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, types } from '../../redux/modules/curations';

import './AppContainer.css';
import App from '../../components/App';

type State = {};
type Props = {};
export class AppContainer extends Component<State, Props> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      curationsById: [],
    };
  }

  render() {
    return <App />;
  }
}

function mapStateToProps(state) {
  return {
    curations: state.curationsById,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
