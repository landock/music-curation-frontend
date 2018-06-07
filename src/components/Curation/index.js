import React from 'react';
import { Item } from 'semantic-ui-react';
import Tracks from '../../containers/Tracks';

function Curation({ curation }) {
  return !curation ? (
    <p>No Curfations</p>
  ) : (
    <Item>
      <Item.Image size="small" src={curation.imageUrl} />
      <Item.Content>
        <Item.Header>{curation.name}</Item.Header>
        <Item.Description>
          <p>{curation.description}</p>
          <strong>Tracks:</strong>{' '}
          <Tracks curationId={curation.id} ids={curation.tracks} />
        </Item.Description>
      </Item.Content>
    </Item>
  );
}

export default Curation;
