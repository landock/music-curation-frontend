import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';

class ModifyCuration extends PureComponent {
  render() {
    return (
      <Menu text vertical>
        <Menu.Item link name="Edit">
          <Icon name="write" />
          Edit
        </Menu.Item>
        <Menu.Item link name="Delete">
          <Icon name="trash" />
          Delete
        </Menu.Item>
        <Menu.Item link name="Duplicate">
          <Icon name="plus" />
          Duplicate
        </Menu.Item>
      </Menu>
    );
  }
}

ModifyCuration.propTypes = {};

export default ModifyCuration;
