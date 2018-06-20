import Immutable from 'seamless-immutable';
import { merge } from 'lodash';

const initialState = {};

const TRACKS_FETCHED = 'music-curation-frontend/tracks/TRACKS_FETCHED';
const types = {
  TRACKS_FETCHED,
};
// Reducer
function reducer(state = initialState, action = {}) {
  const immutableState = Immutable(state);
  switch (action.type) {
    case TRACKS_FETCHED:
      const nextState = merge(state, {
        searchResults: action.payload,
      });
      return { ...nextState };
    default:
      return { ...state };
  }
}

export { reducer as default, types };
