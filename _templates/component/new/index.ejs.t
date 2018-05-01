---
to: src/components/<%= h.pascalCase(name) %>/index.js
---
<% const comp = h.pascalCase(name) -%>
<% if(locals.stateful) { -%>
import React, { Component } from 'react'
import PropTypes from 'prop-types';
class <%= comp %> extends Component {
  render() {
    return <div>edit me: at components/<%= comp %>/index.js</div>
  }
}
<% } else if(locals.functional) { -%>
import React from 'react'
import PropTypes from 'prop-types';
const <%= comp %> = props => <div>edit me: at components/<%= comp %>/index.js</div>
<% } else { -%>
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
class <%= comp %> extends PureComponent {
  render() {
    return <div>edit me: at components/<%= comp %>/index.js</div>
  }
}
<% } -%>

<%= comp %>.propTypes = {}

export default <%= comp %>

