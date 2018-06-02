import React from 'react';
import Curation from '../Curation';
import PublicationStatusEditor from '../PublicationStatusEditor';
import { Item, Grid } from 'semantic-ui-react';

function CurationsCollection({ curations }) {
  if (!curations) return null;
  const curationsObjectKeys = Object.keys(curations);
  const hasCurations = curationsObjectKeys.length > 0;
  const curationsMarkup = hasCurations ? (
    curationsObjectKeys.map(curationId => (
      <Grid.Row key={curationId}>
        <Grid.Column>
          <Item.Group>
            <Curation curation={curations[curationId]} />
          </Item.Group>
        </Grid.Column>
        <Grid.Column textAlign="left">
          <PublicationStatusEditor
            {...{
              curationId: curationId,
              created_at: '2018-04-30T22:09:50.997Z',
              updated_at: '2018-04-30T22:09:50.997Z1',
              scheduled_at: '2018-04-30T22:09:50.997Z',
              environment: ['development'],
            }}
          />
        </Grid.Column>
      </Grid.Row>
    ))
  ) : (
    <Grid.Row>
      <Grid.Column>
        <p>No Curations Found</p>
      </Grid.Column>{' '}
    </Grid.Row>
  );

  return (
    <Grid.Row>
      <Grid.Column>
        <Grid columns={2} divided>
          {curationsMarkup}
        </Grid>
      </Grid.Column>
    </Grid.Row>
  );
}

export default CurationsCollection;
