---
to: src/containers/<%= h.inflection.classify(name) %>/index.js
---
// @flow
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import './<%= h.inflection.classify(name) %>.scss'

type State = {};
type Props = {};
class <%= h.inflection.classify(name) %> extends Component<State, Props> {

constructor(props) {
    super(props);
    autoBind(this);
  }

 render() {
    return ();
 }
}


function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(<%= h.inflection.classify(name) %>)
