import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Checkbox, Input } from 'semantic-ui-react';

class AddToCuration extends PureComponent {
  render() {
    const menuItems = this.props.curations ? (
      this.props.curations.map((curation, index) => (
        <Menu.Item name={curation} key={index}>
          <Checkbox label={curation} value={curation} />
        </Menu.Item>
      ))
    ) : (
      <p>No curations available</p>
    );
    return (
      <Menu text vertical>
        <Menu.Header>
          <Icon name="share" />
          Add to
        </Menu.Header>
        <Menu.Item>
          <Input icon="search" type="search" placeholder="Search" />
        </Menu.Item>
        {menuItems}
      </Menu>
    );
  }
}

AddToCuration.propTypes = {
  curations: PropTypes.arrayOf(PropTypes.string),
};

export default AddToCuration;
