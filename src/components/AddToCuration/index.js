import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Checkbox, Input } from 'semantic-ui-react';

class AddToCuration extends PureComponent {
  render() {
    const menuItems = this.props.curations ? (
      this.props.curations.map((curation, index) => (
        <Menu.Item key={index} name={curation}>
          <Checkbox label={curation} value={curation} />
        </Menu.Item>
      ))
    ) : (
      <Menu.Item content="No curations available" />
    );
    return (
      <Menu data-testid="add-to-curation" text vertical>
        <Menu.Header>Add to</Menu.Header>
        <Menu.Item>
          <Input icon="search" placeholder="Search" />
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
