import React from 'react';
import recycle from 'recycle';
import { Grid, Item } from 'semantic-ui-react';

import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/first';

import Curation from '../../components/Curation';
import CurationScheduler from '../CurationScheduler';
import { types as middlewareTypes } from '../../middleware/api';

import { types as curationsTypes } from '../../modules/CurrentCuration';

const EditCuration = recycle({
  displayName: 'EditCuration',
  dispatch(sources) {
    return [
      sources
        .select('button')
        .addListener('onClick')
        .mapTo({ type: 'UPDATE_CURATION_SCHEDULE', payload: {} }),
      sources.lifecycle
        .filter(e => {
          return e === 'componentDidMount';
        })
        .withLatestFrom(sources.props)
        .map(([e, props]) => {
          return {
            type: middlewareTypes.API_REQUEST,
            nextActionType: curationsTypes.CURATION_FETCHED,
            payload: {
              url: `/curations/${props.match.params.id}`,
              method: 'get',
            },
          };
        }),
    ];
  },
  update(sources) {
    return [
      sources.store
        .withLatestFrom(sources.props)
        .reducer((state, [store, props]) => {
          const { tracks, curations, tags } = store.CurrentCuration.entities;

          state.currentCuration = store.CurrentCuration.entities
            ? store.CurrentCuration.entities.curations[props.match.params.id]
            : null;

          state.currentCuration.tags = tags;
          return state;
        }),
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

export default EditCuration;
