import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Menu, Form, Header } from 'semantic-ui-react';
import TagCollection from '../TagCollection';

import './SearchResultFilterSubHeader.css';

class SearchResultFilterSubHeader extends PureComponent {
  render() {
    return (
      <Grid columns="4">
        <Grid.Row color="black">
          <Grid.Column width={2}>
            <Menu
              inverted
              color="black"
              vertical
              text
              items={[
                { name: 'All', key: 'all' },
                { name: 'Tracks', key: 'tracks' },
                { name: 'Artist', key: 'artist' },
                { name: 'Albums', key: 'albums' },
                { name: 'Label', key: 'label' },
              ]}
            />
          </Grid.Column>
          <Grid.Column width={this.props.tags ? 4 : 7}>
            <Form inverted widths="equal">
              <Form.Input label="Dates" type="range" />
              <Form.Group>
                <Form.Select
                  label="Country"
                  options={[{ key: 'af', value: 'af', text: 'Afghanistan' }]}
                  fluid
                />
                <Form.Select
                  label="City"
                  options={[
                    { key: 'kandahar', value: 'kandahar', text: 'Kandahar' },
                  ]}
                  fluid
                />
              </Form.Group>
            </Form>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted size="small">
              Release type
            </Header>
            <Grid columns="equal">
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
                <Grid.Column>
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
          <Grid.Column width={this.props.tags ? 5 : 2}>
            <TagCollection tags={this.props.tags} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

SearchResultFilterSubHeader.propTypes = { tags: PropTypes.array };

// SearchResultFilterSubHeader.defaultProps = {
//   tags,
// };
export default SearchResultFilterSubHeader;
