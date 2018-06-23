import React from 'react';
import recycle from 'recycle';
import { Grid, Item } from 'semantic-ui-react';

import Curation from '../../components/Curation';
import CurationScheduler from '../CurationScheduler';
import { types as middlewareTypes } from '../../middleware/api';

import { types as curationsTypes } from '../../modules/CurrentCuration';

import { reducer } from 'recycle';
import { withLatestFrom } from 'rxjs/operators';

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
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={10}>
            <Item.Group>
              <Curation curation={state.currentCuration} />
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={6}>
            <CurationScheduler />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  },
});

function getDataOnMount(lifecycleStream, propsStream) {
  return lifecycleStream
    .filter(e => {
      return e === 'componentDidMount';
    })
    .withLatestFrom(propsStream)
    .map(([e, props]) => {
      console.log(e, props);
      return {
        type: middlewareTypes.API_REQUEST,
        nextActionType: curationsTypes.CURATION_FETCHED,
        payload: {
          url: `/curations/${props.match.params.id}`,
          method: 'get',
        },
      };
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
