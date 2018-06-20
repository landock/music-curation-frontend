import React from 'react';
import recycle from 'recycle';
import CurationsCollection from '../../components/CurationsCollection';

const SearchCurationsResults = recycle({
  update(sources) {
    return [
      sources.store.reducer((state, store) => {
        state.curations =
          store.SearchCurations.entities &&
          store.SearchCurations.entities.curations;
        return state;
      }),
    ];
  },
  view(props, state) {
    return <CurationsCollection curations={state.curations} />;
  },
});

export default SearchCurationsResults;
