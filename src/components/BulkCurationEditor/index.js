import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Checkbox, Button, Select } from 'semantic-ui-react';

class BulkCurationEditor extends PureComponent {
  render() {
    return (
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={2}>
            <Checkbox />
            <label style={{ marginLeft: '5px' }}>Select All</label>
          </Grid.Column>
          <Grid.Column width={4}>
            <Select />
          </Grid.Column>
          <Grid.Column width={4}>
            <Select />
          </Grid.Column>
          <Grid.Column floated="right" textAlign="right">
            <Button color="red">New Curation</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

BulkCurationEditor.propTypes = {};

export default BulkCurationEditor;
