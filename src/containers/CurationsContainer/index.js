import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { getCurations } from '../../api';
import { actions as curationsActions } from '../../modules/Curations';
import CurationsCollection from '../../components/CurationsCollection';

export class CurationsContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    return this.props.doFetchCurations();
  }

  render() {
    return <CurationsCollection curations={this.props.curations} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doFetchCurations: bindActionCreators(
      curationsActions.fetchCurations,
      dispatch
    ),
  };
}

function mapStateToProps(state) {
  return {
    curations: state.Curations,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurationsContainer);
