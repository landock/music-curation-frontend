import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class ModifyCuration extends PureComponent {
  render() {
    return (
      <ul style={{ listStyle: 'none' }}>
        <li>
          <button>Edit</button>
        </li>
        <li>
          <button>Delete</button>
        </li>
        <li>
          <button>Duplicate</button>
        </li>
      </ul>
    );
  }
}

ModifyCuration.propTypes = {};

export default ModifyCuration;
