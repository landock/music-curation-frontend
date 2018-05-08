import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Grid } from 'semantic-ui-react';

class BulkCurationEditor extends PureComponent {
  render() {
    return (
      <Grid.Row>
        <Grid.Column textAlign="left">
          <Form widths="equal">
            <Form.Group inline>
              <Form.Field inline>
                <Form.Checkbox label="Select All" />
              </Form.Field>
              <Form.Select fluid />

              <Form.Select fluid />
              <Form.Button floated="right" color="red">
                New Curation
              </Form.Button>
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

BulkCurationEditor.propTypes = {};

export default BulkCurationEditor;
