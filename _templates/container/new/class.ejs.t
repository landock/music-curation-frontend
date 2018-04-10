---
to: src/containers/<%= h.pascalCase(name) %>/index.js
---
<% const container = h.pascalCase(name) -%>
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class <%= container %> extends Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(<%= container %>)
