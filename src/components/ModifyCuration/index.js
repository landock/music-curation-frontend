import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';

class ModifyCuration extends PureComponent {
  render() {
    return (
      <Menu text vertical>
        <Menu.Item name="Edit">
          <Icon name="write" />
          Edit
        </Menu.Item>

        <Menu.Item name="Delete">
          <Icon name="trash" />
          Delete
        </Menu.Item>
        <Menu.Item name="Duplicate">
          <Icon name="plus" />
          Duplicate
        </Menu.Item>
      </Menu>
    );
  }
}

ModifyCuration.propTypes = {};

export default ModifyCuration;
