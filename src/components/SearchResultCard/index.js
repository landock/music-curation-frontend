import React from 'react';
import PropTypes from 'prop-types';

import { Item, Menu, Icon, Button, Popup } from 'semantic-ui-react';

import AddTags from '../AddTags';
import AddToCuration from '../AddToCuration';

function SearchResultCard({
  trackName,
  artistName,
  iconName,
  durationInSeconds,
  imageUrl,
  streamUrl,
  recordLabels,
  curations,
}) {
  return (
    <Item>
      <Item.Image size="tiny" src={imageUrl} />
      <Item.Content>
        <Item.Header as="a">
          {trackName}
          <Icon name={iconName || 'plus'} />
        </Item.Header>
        <Item.Description>{artistName}</Item.Description>
        <Item.Extra>
          {recordLabels ? (
            <span>{recordLabels.join(', ')}</span>
          ) : (
            <span> no labels </span>
          )}
          <p>{durationInSeconds}</p>
        </Item.Extra>
        <Popup
          trigger={
            <Icon style={{ cursor: 'pointer' }} size="small" name="tags" />
          }
          content={<AddTags />}
          on="click"
          position="top right"
          verticalOffset={-100}
          horizontalOffset={90}
          basic
        />
        <Popup
          trigger={<Icon name="share" style={{ cursor: 'pointer' }} />}
          content={<AddToCuration curations={curations} />}
          on="click"
          position="bottom right"
          verticalOffset={-133}
          horizontalOffset={-20}
          basic
        />
      </Item.Content>
    </Item>
  );
}

SearchResultCard.propTypes = {
  trackName: PropTypes.string,
  artistName: PropTypes.string,
  durationInSeconds: PropTypes.number,
  imageUrl: PropTypes.string,
  streamUrl: PropTypes.string,
  recordLabels: PropTypes.arrayOf(PropTypes.string),
};

export default SearchResultCard;
