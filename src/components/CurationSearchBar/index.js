import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Popup,
  Icon,
  Button,
  Grid,
  Input,
  Container,
} from 'semantic-ui-react';

class CurationSearchBar extends PureComponent {
  render() {
    const containerStyle = {
      minHeight: '150px',
    };
    return (
      <Form inverted>
        <Form.Input icon="search" placeholder="Search Curations" />
      </Form>
    );
  }
}

CurationSearchBar.propTypes = {};

export default CurationSearchBar;
