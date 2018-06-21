import React from 'react';
import recycle from 'recycle';
import SearchResultCollection from '../../components/SearchResultCollection';
import { sortBy } from 'lodash';
import keyGenerator from '../../generateKeyFromObjectWithIds';

const SearchResults = recycle({
  displayName: 'SearchResults',
  update(sources) {
    return [
      sources.store.reducer((state, store) => {
        state.searchResults = sortBy(store.Tracks.searchResults, ['trackName']);
        return state;
      }),
    ];
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

export default SearchResults;
