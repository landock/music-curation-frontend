import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

class ModifyCuration extends PureComponent {
  render() {
    const { id } = this.props;
    const RemoveCuration = gql`
      mutation {
        removeCuration(id: ${id})
      }
    `;
    return (
      <Menu text vertical>
        <Menu.Item name="Edit">
          <Icon name="write" />

          <Link style={{ color: '#333' }} to={`/editCuration/${id}`}>
            Edit
          </Link>
        </Menu.Item>
        <Menu.Item link name="Delete">
          <Icon name="trash" />
          <Mutation mutation={RemoveCuration} ignoreResults>
            {(removeCuration, data) => (
              <Button
                onClick={() => {
                  console.log(
                    removeCuration({
                      variables: { id: parseInt(id, 10) },
                    })
                  );
                }}
              >
                Delete
              </Button>
            )}
          </Mutation>
        </Menu.Item>
        <Menu.Item link name="Duplicate">
          <Icon name="plus" />
          Duplicate
        </Menu.Item>
      </Menu>
    );
  }
}

ModifyCuration.propTypes = {};

export default ModifyCuration;
