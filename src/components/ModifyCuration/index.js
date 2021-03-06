import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

class ModifyCuration extends PureComponent {
  render() {
    return (
      <Menu text vertical>
        <Menu.Item link name="Edit">
          <Icon name="write" />
          <Link
            style={{ color: 'rgba(0,0,0,.6)' }}
            to={`editCuration/${this.props.curationId}`}
          >
            Edit
          </Link>
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

ModifyCuration.propTypes = {
  id: PropTypes.any,
};

export default ModifyCuration;
