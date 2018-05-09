import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Curation from '../Curation';
import CurationScheduler from '../CurationScheduler';
import { Grid, Item } from 'semantic-ui-react';
import { curation } from '../../fixtures/test_data';

class EditCuration extends PureComponent {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={10}>
            <Item.Group>
              <Curation curation={this.props.curation} />
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={6}>
            <CurationScheduler />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

EditCuration.propTypes = {
  curation: PropTypes.object,
};
EditCuration.defaultProps = {
  curation,
};

export default EditCuration;
