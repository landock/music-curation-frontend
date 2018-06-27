import React from 'react';
import { Item } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Tracks from '../../containers/Tracks';
import TagCollection from '../TagCollection';

function Curation({ curation }) {
  return !curation ? (
    <p>No Curations</p>
  ) : (
    <Item>
      <Item.Image size="small" src={curation.imageUrl} />
      <Item.Content>
        <Item.Header>{curation.name}</Item.Header>
        <Item.Description>
          <p>{curation.description}</p>
          <strong>Tracks:</strong>{' '}
          {curation.tracks ? (
            <Tracks curationId={curation.id} ids={curation.tracks} />
          ) : (
            <p>No tracks available</p>
          )}
          <Route
            path="/editCuration/:id"
            render={props => <TagCollection tags={curation.tags} />}
          />
        </Item.Description>
      </Item.Content>
    </Item>
  );
}

Curation.propTypes = {
  curation: PropTypes.object,
};

export default Curation;
