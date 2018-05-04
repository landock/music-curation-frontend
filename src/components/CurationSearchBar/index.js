import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Popup, Icon, Button, Grid, Input } from 'semantic-ui-react';

class CurationSearchBar extends PureComponent {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#354244',
          height: '150px',
          padding: '50px 15% 0',
        }}
      >
        <Input icon="search" placeholder="Search Curations" fluid />
      </div>
    );
  }
}

CurationSearchBar.propTypes = {};

export default CurationSearchBar;
