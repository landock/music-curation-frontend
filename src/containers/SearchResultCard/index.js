import React from 'react';
import recycle from 'recycle';
import PropTypes from 'prop-types';

import { Item, Icon, Popup } from 'semantic-ui-react';

import AddTags from '../../components/AddTags';
import AddToCuration from '../../components/AddToCuration';
import { types as curationsTypes } from '../../modules/CurrentCuration';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

const SearchResultCard = recycle({
  displayName: 'SearchResultCard',
  dispatch(sources) {
    return [
      sources
        .select(Icon)
        .addListener('onClick')
        .withLatestFrom(sources.props)
        .map(([e, props]) => {
          return {
            type: curationsTypes.ADD_CURATION_TRACK,
            payload: { ...props },
          };
        }),
    ];
  },
  view(props, state) {
    const DragHandleName = SortableHandle(({ trackName }) => {
      return <span>{trackName}</span>;
    });
    const {
      id,
      trackName,
      artistName,
      iconName,
      durationInSeconds,
      imageUrl,
      streamUrl,
      tags,
      recordLabels,
      curations,
    } = props;
    return (
      <Item>
        <Item.Image size="tiny" src={imageUrl} />
        <Item.Content>
          <Item.Header as="a">
            <DragHandleName trackName={trackName} />{' '}
            <Icon name={iconName || 'plus'} link />
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
            content={<AddTags tags={tags} />}
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
  },
});

SearchResultCard.propTypes = {
  id: PropTypes.number,
  trackName: PropTypes.string,
  artistName: PropTypes.string,
  durationInSeconds: PropTypes.number,
  imageUrl: PropTypes.string,
  streamUrl: PropTypes.string,
  recordLabels: PropTypes.arrayOf(PropTypes.string),
};

const SortableSearchResultCard = SortableElement(props => (
  <SearchResultCard {...props} />
));
export default SortableSearchResultCard;
