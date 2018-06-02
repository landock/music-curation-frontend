import React from 'react';
import recycle from 'recycle';

import { types as curationsTypes } from '../../modules/Curations';
import { types as middlewareTypes } from '../../middleware/api';
import CurationsCollection from '../../components/CurationsCollection';

const Curations = recycle({
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
      sources.store.reducer(function(state, store) {
        state.curations =
          store.Curations.entities && store.Curations.entities.curations;
        return state;
      }),
    ];
  },
  view(props, state) {
    return <CurationsCollection curations={state.curations} />;
  },
});

export default Curations;
