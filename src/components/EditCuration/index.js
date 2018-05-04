import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Curation from '../Curation';
import CurationScheduler from '../CurationScheduler';
import { Grid, Item } from 'semantic-ui-react';

class EditCuration extends PureComponent {
  render() {
    return (
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Item.Group>
              <Curation curation={this.props.curation} />
            </Item.Group>
          </Grid.Column>
          <Grid.Column>
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

export default EditCuration;
