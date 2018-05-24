import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TagCollection from '../TagCollection';
import { Form, Grid } from 'semantic-ui-react';

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
          <Grid.Row textAlign="left">
            <Grid.Column textAlign="right">
              <span style={{ color: 'white' }}>Filters:</span>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label style={{ color: 'white' }}>Environment</label>
                <Form.Select options={environmentOptions} />
              </Form.Field>
              <Form.Field>
                <label style={{ color: 'white' }}>Status</label>
                <Form.Select options={statusOptions} />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <p>
                <strong style={{ color: 'white' }}>Tags</strong>
              </p>
              <TagCollection tags={this.props.tags} />
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
