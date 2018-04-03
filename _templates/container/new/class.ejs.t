---
to: src/containers/<%= name %>/index.js
---
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import './<%= h.inflection.classify(name) %>.scss'

class <%= h.inflection.classify(name) %> extends Component {

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
