import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Input, Select, Menu } from 'semantic-ui-react';
import TagCollection from '../TagCollection';
import './SearchResultFilterSubHeader.css';

class SearchResultFilterSubHeader extends PureComponent {
  render() {
    return (
      <Grid columns="4">
        <Grid.Row>
          <Grid.Column color="black" width={2}>
            <Menu
              color="white"
              vertical
              text
              items={[
                { name: 'All', key: 'all' },
                { name: 'Tracks', key: 'tracks' },
                { name: 'Albums', key: 'albums' },
                { name: 'Label', key: 'label' },
              ]}
            />
          </Grid.Column>
          <Grid.Column color="black" width={5}>
            <label style={{ display: 'block' }}>Dates</label>
            <Input type="range" />
            <div>
              <label style={{ display: 'block' }}>Country</label>

              <Select />
            </div>
            <div>
              <label style={{ display: 'block' }}>City</label>
              <Select />
            </div>
          </Grid.Column>
          <Grid.Column color="black" width={2}>
            <Menu
              vertical
              text
              items={[
                {
                  name: 'Release Type',
                  key: 'release-type',
                  header: 'Release Type',
                },
                { name: 'All', key: 'all' },
                { name: 'Tracks', key: 'tracks' },
                { name: 'Albums', key: 'albums' },
                { name: 'Label', key: 'label' },
                { name: 'All', key: 'all' },
                { name: 'Tracks', key: 'tracks' },
                { name: 'Albums', key: 'albums' },
                { name: 'Label', key: 'label' },
              ]}
            />
          </Grid.Column>
          <Grid.Column color="black" width={7}>
            <TagCollection tags={this.props.tags} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

SearchResultFilterSubHeader.propTypes = {};

export default SearchResultFilterSubHeader;
