import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/curations';

import './AppContainer.css';
import App from '../../components/App';

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.actions && this.props.actions.fetchCurations();
  }

  render() {
    const { curations } = this.props;
    return <App curations={curations ? curations.curationsById : null} />;
  }
}

function mapStateToProps(state) {
  return {
    curations: state.curations,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
