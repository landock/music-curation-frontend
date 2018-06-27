import React from 'react';
import recycle from 'recycle';
import CurationsCollection from '../../components/CurationsCollection';

const SearchCurationsResults = recycle({
  update(sources) {
    return [sources.store.reducer(reducerCallback)];
  },
  view(props, state) {
    return <CurationsCollection curations={state.curations} />;
  },
});

function reducerCallback(state, store) {
  if (!state) return;
  if (!store || !store.SearchCurations) return state;

  state.curations =
    store.SearchCurations.entities && store.SearchCurations.entities.curations;
  return state;
}
export { SearchCurationsResults as default, reducerCallback };
