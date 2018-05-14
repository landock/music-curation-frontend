import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Curation from '../Curation';
import CurationScheduler from '../CurationScheduler';
import { Grid, Item } from 'semantic-ui-react';
import { curation } from '../../fixtures/test_data';

function EditCuration({ match: { params: { id } } }) {
  const CurationQuery = gql`
    {
      Curation(id: ${id}) {
        id
        imageUrl
        description
        tracks
        name
      }
    }
  `;

  return (
    <Query query={CurationQuery} variables={{ id: parseInt(id, 10) }}>
      {({ loading, error, data }) => {
        console.log(data);
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;
        return (
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={10}>
                <Item.Group>
                  <Curation curation={data.Curation} />
                </Item.Group>
              </Grid.Column>
              <Grid.Column width={6}>
                <CurationScheduler />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
      }}
    </Query>
  );
}

export default EditCuration;
