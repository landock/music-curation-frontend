import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { getCurations } from '../../api';

import CurationsCollection from '../../components/CurationsCollection';

export default class CurationsContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const CurationsQuery = gql`
      {
        allCurations {
          id
          imageUrl
          description
          tracks
          name
        }
      }
    `;

    return (
      <Query query={CurationsQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;

          return <CurationsCollection curations={data.allCurations} />;
        }}
      </Query>
    );
  }
}
