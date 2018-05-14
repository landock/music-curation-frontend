import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

class CurationSearchBar extends PureComponent {
  render() {
    return (
      <Form inverted>
        <Form.Input icon="search" placeholder="Search Curations" />
      </Form>
    );
  }
}

CurationSearchBar.propTypes = {};

export default CurationSearchBar;
