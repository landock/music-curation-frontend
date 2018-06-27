import React from 'react';
import recycle from 'recycle';
import PropTypes from 'prop-types';
import { map, withLatestFrom } from 'rxjs/operators';

import { Item, Icon, Popup } from 'semantic-ui-react';

import AddTags from '../../components/AddTags';
import AddToCuration from '../../components/AddToCuration';
import {
  types as curationsTypes,
  actions as curationsActions,
} from '../../modules/CurrentCuration';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import getSelectorStream from '../../getSelectorStream';

const SearchResultCard = recycle({
  displayName: 'SearchResultCard',
  dispatch(sources) {
    const buttonEventStream = getSelectorStream(
      sources.select,
      Icon,
      'onClick'
    );
    return [
      mapClickEventToActionWithPropsAsPayload(buttonEventStream, sources.props),
    ];
  },
  view(props, state) {
    return new SearchResultCardView(props);
  },
});

function mapClickEventToActionWithPropsAsPayload(eventStream, propsStream) {
  return eventStream.pipe(
    withLatestFrom(propsStream),
    map(([e, props]) => {
      return curationsActions.addCurationTrack({ ...props });
    })
  );
}

function SearchResultCardView({
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
}) {
  const DragHandleName = SortableHandle(({ trackName }) => {
    return <span>{trackName}</span>;
  });
  return (
    <Item>
      <Item.Image size="tiny" src={imageUrl} />
      <Item.Content>
        <Item.Header as="a">
          <DragHandleName trackName={trackName} />
          {': ' + id}
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
}

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
export {
  SortableSearchResultCard as default,
  mapClickEventToActionWithPropsAsPayload,
  SearchResultCardView,
};
