import React from 'react';
import recycle from 'recycle';

import { sortBy } from 'lodash';

import SearchResultCollection from '../../components/SearchResultCollection';

const CurrentCurationTracks = recycle({
  initialState: {
    searchResults: null,
  },
  dispatch(sources) {
    return [];
  },
  update(sources) {
    return [
      sources.store.reducer((state, store) => {
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
      }),
    ];
  },
  view(props, state) {
    return <SearchResultCollection searchResults={state.searchResults} />;
  },
});

export default CurrentCurationTracks;
