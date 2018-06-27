import React from 'react';
import recycle from 'recycle';

import { getData } from '../../middleware/api';

import { types as curationsTypes } from '../../modules/CurrentCuration';

import { reducer } from 'recycle';
import { withLatestFrom } from 'rxjs/operators';
import EditCurationView from '../../components/EditCurationView';

const EditCuration = recycle({
  //TODO: Add displayName to hygen generator
  displayName: 'EditCuration',
  dispatch(sources) {
    return [getDataOnMount(sources.lifecycle, sources.props)];
  },
  update(sources) {
    return [
      getCurrentCuration(
        sources.store,
        sources.props,
        getCurrentCurationReducer
      ),
    ];
  },
  view(props, state) {
    return <EditCurationView currentCuration={state.currentCuration} />;
  },
});

function getDataOnMount(lifecycleStream, propsStream) {
  return lifecycleStream
    .filter(e => {
      return e === 'componentDidMount';
    })
    .withLatestFrom(propsStream)
    .map(([e, props]) => {
      const url = `/curations/${props.match.params.id}`;
      const nextActionType = curationsTypes.CURATION_FETCHED;

      return getData(url, nextActionType);
    });
}

function getCurrentCuration(storeStream, propsStream, reducerFunc) {
  const result = storeStream.pipe(
    withLatestFrom(propsStream),
    reducer(reducerFunc)
  );
  return result;
}

function getCurrentCurationReducer(state, [store, props]) {
  if (!store.CurrentCuration.entities) return state;

  const { tags } = store.CurrentCuration.entities;

  state.currentCuration =
    store.CurrentCuration.entities.curations[props.match.params.id];

  state.currentCuration.tags = tags;
  return state;
}

export {
  EditCuration as default,
  getDataOnMount,
  getCurrentCuration,
  getCurrentCurationReducer,
};
