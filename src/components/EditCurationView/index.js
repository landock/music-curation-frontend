import React from 'react';
import { Grid, Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Curation from '../../components/Curation';
import CurationScheduler from '../../containers/CurationScheduler';

function EditCurationView({ currentCuration }) {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={10}>
          <Item.Group>
            <Curation curation={currentCuration} />
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={6}>
          <CurationScheduler />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

EditCurationView.propTypes = {
  currentCuration: PropTypes.object,
};

export default EditCurationView;
