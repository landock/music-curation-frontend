import React from 'react';
import recycle from 'recycle';
import SearchResultCollection from '../../components/SearchResultCollection';
import { sortBy } from 'lodash';
import keyGenerator from '../../generateKeyFromObjectWithIds';

const SearchResults = recycle({
  displayName: 'SearchResults',
  update(sources) {
    return [sources.store.reducer(updateReducer)];
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

function updateReducer(state, store) {
  if (!store.Tracks) return state;
  state.searchResults = sortBy(store.Tracks.searchResults, ['trackName']);
  return state;
}
export { SearchResults as default, updateReducer };
