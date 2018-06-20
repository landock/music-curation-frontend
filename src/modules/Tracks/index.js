import Immutable from 'seamless-immutable';
import { merge } from 'lodash';

const initialState = {};

const TRACKS_FETCHED = 'music-curation-frontend/tracks/TRACKS_FETCHED';
const types = {
  TRACKS_FETCHED,
};
// Reducer
function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case TRACKS_FETCHED:
      state = merge(state, {
        searchResults: payload,
      });
      return { ...state };
    default:
      return { ...state };
  }
}

export { reducer as default, types };
