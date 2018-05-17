import React, { Component } from 'react';
import Curation from '../Curation';
import PublicationStatusEditor from '../PublicationStatusEditor';
import { Item, Grid } from 'semantic-ui-react';

class CurationsCollection extends Component {
  render() {
    const { curations } = this.props;
    const hasCurations =
      curations && curations.curations && curations.curations[0];
    const curationsMarkup = hasCurations ? (
      curations.curations.map(curation => (
        <Grid.Row key={curation.id}>
          <Grid.Column>
            <Item.Group>
              <Curation curation={curation} />
            </Item.Group>
          </Grid.Column>
          <Grid.Column textAlign="left">
            <PublicationStatusEditor
              {...{
                curationId: curation.id,
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
}

export default CurationsCollection;
