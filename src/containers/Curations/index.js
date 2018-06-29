import React from 'react';
import recycle, { reducer } from 'recycle';

import { types as curationsTypes } from '../../modules/Curations';
import { getData } from '../../middleware/api';
import CurationsCollection from '../../components/CurationsCollection';

const Curations = recycle({
  displayName: 'Curations',
  initialState: {
    curations: null,
    searchCurations: null,
  },
  dispatch(sources) {
    return [getCurationsOnMount(sources.lifecycle)];
  },
  update(sources) {
    return [getSearchCurationsFromStore(sources.store, stateReducer)];
  },
  view(props, state) {
    return (
      <CurationsCollection
        curations={state.searchCurations || state.curations}
      />
    );
  },
});

function getCurationsOnMount(lifecycleStream) {
  return lifecycleStream
    .filter(e => e === 'componentDidMount')
    .map(() => getData('/curations', curationsTypes.CURATIONS_FETCHED));
}

function getSearchCurationsFromStore(storeStream, reducerFunc) {
  return storeStream.pipe(reducer(reducerFunc));
}

function stateReducer(state, store) {
  state.curations =
    store.Curations &&
    store.Curations.entities &&
    store.Curations.entities.curations;
  state.searchCurations =
    store.SearchCurations &&
    store.SearchCurations.entities &&
    store.SearchCurations.entities.curations;
  return state;
}

export {
  Curations as default,
  getCurationsOnMount,
  getSearchCurationsFromStore,
  stateReducer,
};
