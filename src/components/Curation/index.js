import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
class Curation extends Component {
  render() {
    const { curation } = this.props;
    return (
      <Item>
        <Item.Image size="small" src={curation.imageUrl} />
        <Item.Content>
          <Item.Header>{curation.name}</Item.Header>
          <Item.Description>
            Tracks:{' '}
            {curation.tracks &&
              curation.tracks
                .map(track => {
                  return track.trackName;
                })
                .join(', ')}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default Curation;
