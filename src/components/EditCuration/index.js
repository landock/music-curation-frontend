import React from 'react';
import recycle from 'recycle';
import { Grid, Item } from 'semantic-ui-react';

import Curation from '../Curation';
import CurationScheduler from '../CurationScheduler';

import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/first';

import { actions as curationsActions } from '../../modules/Curations';

const EditCuration = recycle({
  dispatch(sources) {
    let { fetchCuration } = curationsActions;
    return [
      sources
        .select('button')
        .addListener('onClick')
        .mapTo({ type: 'UPDATE_CURATION_SCHEDULE', payload: {} }),
      sources.lifecycle
        .filter(e => {
          return e === 'componentDidMount';
        })
        .merge(sources.props)
        .first()
        .map(props => {
          return fetchCuration(props.match.params.id);
        }),
    ];
  },
  update(sources) {
    return [
      sources.store.reducer((state, store) => {
        state.currentCuration = store.Curations.currentCuration;
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
