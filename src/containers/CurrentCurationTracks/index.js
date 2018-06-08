import React from 'react';
import recycle from 'recycle';

import SearchResultCollection from '../../components/SearchResultCollection';

const CurrentCurationTracks = recycle({
  dispatch(sources) {
    return [];
  },
  update(sources) {
    return [
      sources.store.reducer((state, store) => {
        state.searchResults = store.CurrentCuration.entities
          ? Object.keys(store.Curations.entities.tracks).map(
              id => store.Curations.entities.tracks[id]
            )
          : null;
        console.log('CurrentCurationTracks: ', state);
        return state;
      }),
    ];
  },
  view(props, state) {
    return <SearchResultCollection searchResults={state.searchResults} />;
  },
});

export default CurrentCurationTracks;
