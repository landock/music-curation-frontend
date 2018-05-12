import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Tag from '../Tag';

class TagCollection extends PureComponent {
  render() {
    const TagsQuery = gql`
      {
        allTags {
          id
          title
        }
      }
    `;
    return (
      <Query query={TagsQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;

          return data.allTags.map(tag => <Tag key={tag.id} data={tag} />);
        }}
      </Query>
    );
  }
}

export default TagCollection;
