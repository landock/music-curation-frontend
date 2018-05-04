import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TagCollection from '../TagCollection';
import { Form, Select, Icon, Checkbox, Input, Grid } from 'semantic-ui-react';

class CurationFilterSubHeader extends PureComponent {
  render() {
    const statusOptions = [
      { value: 'draft', text: 'Draft' },
      { value: 'published', text: 'Published' },
    ];
    const environmentOptions = [
      { value: 'production', text: 'Production' },
      { value: 'development', text: 'Development' },
    ];

    return (
      <Form>
        <Grid columns={3} style={{ background: 'black', marginBottom: '20px' }}>
          <Grid.Row>
            <Grid.Column textAlign="right">Filters:</Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label style={{ color: 'white' }}>Environment</label>
                <Select options={environmentOptions} />
              </Form.Field>
              <Form.Field>
                <label style={{ color: 'white' }}>Status</label>
                <Select options={statusOptions} />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <p>
                <strong>Tags</strong>
              </p>
              <TagCollection
                tags={[{ id: 1, title: 'what' }, { id: 2, title: 'when' }]}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

CurationFilterSubHeader.propTypes = {
  environments: PropTypes.arrayOf(PropTypes.string),
  statuses: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.object),
};

export default CurationFilterSubHeader;
