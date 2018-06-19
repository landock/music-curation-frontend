import React from 'react';
import recycle from 'recycle';

import { types as curationsTypes } from '../../modules/Curations';
import { types as middlewareTypes } from '../../middleware/api';
import CurationsCollection from '../../components/CurationsCollection';

const Curations = recycle({
  displayName: 'Curations',
  dispatch(sources) {
    return [
      sources.lifecycle.filter(e => e === 'componentDidMount').map(() => {
        return {
          type: middlewareTypes.API_REQUEST,
          nextActionType: curationsTypes.CURATIONS_FETCHED,
          payload: {
            url: '/curations',
          },
        };
      }),
    ];
  },
  update(sources) {
    return [
      sources.store.reducer((state, store) => {
        state.curations =
          store.Curations.entities && store.Curations.entities.curations;
        state.searchCurations =
          store.SearchCurations.entities &&
          store.SearchCurations.entities.curations;
        return state;
      }),
    ];
  },
  view(props, state) {
    return (
      <CurationsCollection
        curations={state.searchCurations || state.curations}
      />
    );
  },
});

export default Curations;
