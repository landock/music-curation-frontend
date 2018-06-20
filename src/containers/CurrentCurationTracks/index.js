import React from 'react';
import recycle from 'recycle';

import { sortBy } from 'lodash';

import SearchResultCollection from '../../components/SearchResultCollection';

function keyGenerator(results) {
  if (!results) return 'no-data';
  let ids = results.map(result => result.id);
  ids.sort();
  return ids.join('-');
}
const CurrentCurationTracks = recycle({
  displayName: 'CurrentCurationTracks',
  initialState: {
    searchResults: null,
  },
  update(sources) {
    return [updateTracks(sources.store)];
  },
  view(props, state) {
    return (
      <SearchResultCollection
        key={keyGenerator(state.searchResults)}
        searchResults={state.searchResults}
      />
    );
  },
});

function updateTracks(storeStream) {
  return storeStream.reducer(getCurrentTracksReducer);
}

function getCurrentTracksReducer(state, store) {
  if (!store.CurrentCuration.entities) return state;

  const { CurrentCuration: { entities: { tracks } } } = store;
  const tracksCollection = tracks
    ? Object.keys(tracks).map(id => {
        const trackWithIcon = tracks[id];
        trackWithIcon.iconName = 'eject';
        return trackWithIcon;
      })
    : null;
  state.searchResults = sortBy(tracksCollection, ['trackName']);
  return state;
}

export {
  CurrentCurationTracks as default,
  updateTracks,
  getCurrentTracksReducer,
};
