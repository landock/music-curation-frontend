import React from 'react';
import recycle from 'recycle';
import SearchResultCollection from '../../components/SearchResultCollection';

const SearchResults = recycle({
  dispatch(sources) {
    return [];
  },
  update(sources) {
    return [
      sources.store.reducer((state, store) => {
        state.searchResults = store.Tracks.searchResults;
        return state;
      }),
    ];
  },
  view(props, state) {
    return <SearchResultCollection searchResults={state.searchResults} />;
  },
});

export default SearchResults;
