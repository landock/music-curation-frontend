import React from 'react';
import recycle from 'recycle';
import SearchResultCollection from '../../components/SearchResultCollection';
import { sortBy } from 'lodash';

const SearchResults = recycle({
  dispatch(sources) {
    return [];
  },
  update(sources) {
    return [
      sources.store.reducer((state, store) => {
        state.searchResults = sortBy(store.Tracks.searchResults, ['trackName']);
        return state;
      }),
    ];
  },
  view(props, state) {
    return <SearchResultCollection searchResults={state.searchResults} />;
  },
});

export default SearchResults;
