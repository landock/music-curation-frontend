import React from 'react';
import recycle from 'recycle';
import { sortBy } from 'lodash';

import SearchResultCollection from '../../components/SearchResultCollection';
import keyGenerator from '../../generateKeyFromObjectWithIds';

const SearchResults = recycle({
  displayName: 'SearchResults',
  update(sources) {
    return [sources.store.reducer(reducerCallback)];
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

function reducerCallback(state, store) {
  if (!store.Tracks) return state;
  state.searchResults = sortBy(store.Tracks.searchResults, ['trackName']);
  return state;
}
export { SearchResults as default, reducerCallback };
