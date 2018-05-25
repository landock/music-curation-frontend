import React from 'react';
import recycle from 'recycle';

import { actions as curationsActions } from '../../modules/Curations';
import CurationsCollection from '../../components/CurationsCollection';

const Curations = recycle({
  dispatch(sources) {
    return [
      sources.lifecycle
        .filter(e => e === 'componentDidMount')
        .map(curationsActions.fetchCurations),
    ];
  },
  update(sources) {
    return [
      sources.store.reducer(function(state, store) {
        state.curations = store.Curations;
        return state;
      }),
    ];
  },
  view(props, state) {
    return <CurationsCollection curations={state.curations} />;
  },
});

export default Curations;