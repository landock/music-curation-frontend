import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Input, Select, Menu, Header } from 'semantic-ui-react';
import TagCollection from '../TagCollection';
import './SearchResultFilterSubHeader.css';

class SearchResultFilterSubHeader extends PureComponent {
  render() {
    return (
      <Grid columns="4">
        <Grid.Row>
          <Grid.Column color="black" width={2}>
            <Menu
              inverted
              color="black"
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
          <Grid.Column color="black" width={4}>
            <Grid columns="equal">
              <Header inverted size="small">
                Release type
              </Header>
              <Grid.Row>
                <Grid.Column>
                  <Menu
                    inverted
                    vertical
                    text
                    items={[
                      { name: 'Karaoke', key: 'karaoke' },
                      { name: 'Soundtrack', key: 'soundtrack' },
                      { name: 'Compilation', key: 'compilation' },
                      { name: 'Single', key: 'single' },
                      { name: 'B-Side', key: 'b-side' },
                    ]}
                  />
                </Grid.Column>
                <Grid.Column color="black">
                  <Menu
                    inverted
                    vertical
                    text
                    items={[
                      { name: 'Collaboration', key: 'collaboration' },
                      { name: 'Related', key: 'related' },
                      { name: 'Remix', key: 'remix' },
                      { name: 'Live', key: 'live' },
                      { name: 'Acoustic', key: 'acoustic' },
                    ]}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column color="black" width={5}>
            <TagCollection tags={this.props.tags} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

SearchResultFilterSubHeader.propTypes = {};

export default SearchResultFilterSubHeader;
