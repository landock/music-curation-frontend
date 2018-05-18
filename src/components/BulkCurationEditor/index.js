import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';

class BulkCurationEditor extends PureComponent {
  render() {
    return (
      <Form widths="equal">
        <Form.Group inline>
          <Form.Field inline>
            <Form.Checkbox label="Select All" />
          </Form.Field>
          <Form.Select
            placeholder="Actions"
            options={[{ key: 'af', value: 'af', text: 'Afghanistan' }]}
            fluid
          />

          <Form.Select
            placeholder="Add to"
            options={[{ key: 'af', value: 'af', text: 'Afghanistan' }]}
            fluid
          />
          <Form.Button floated="right" color="red">
            New Curation
          </Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default BulkCurationEditor;
