import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

class Curation extends Component {
  render() {
    const { curation } = this.props;
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
            <em>
              {curation.tracks &&
                curation.tracks
                  .map(track => {
                    return track.trackName;
                  })
                  .join(', ')}
            </em>
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default Curation;
