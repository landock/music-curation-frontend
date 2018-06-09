import Immutable from 'seamless-immutable';

import { getCuration } from '../../api';
import { curation } from '../../schema';
import { normalize } from 'normalizr';
import { merge } from 'lodash';

const initialState = {};
const ADD_CURATION_TRACK =
  'music-curation-frontend/curations/ADD_CURATION_TRACK';
const CURATION_FETCHED = 'music-curation-frontend/curations/CURATION_FETCHED';
const types = {
  ADD_CURATION_TRACK,
  CURATION_FETCHED,
};
// Reducer
function reducer(state = initialState, action = {}) {
  const { payload, type } = action;
  if (!payload) return state;
  switch (action.type) {
    case ADD_CURATION_TRACK:
      state.entities.curations[state.result].tracks.push(payload.id);
      state.entities.tracks[payload.id] = payload;
      return { ...state };
    case CURATION_FETCHED:
      let normalizedData = normalize(payload, curation);
      state = merge(state, normalizedData);
      return { ...state };
    default:
      return state;
  }
}

function curationFetched(payload) {
  return { type: CURATION_FETCHED, payload: payload };
}

function fetchCuration(id) {
  return dispatch => {
    return getCuration(id).then(body => {
      return dispatch(curationFetched(body));
    });
  };
}

const actions = {
  fetchCuration,
  curationFetched,
};
export { reducer as default, types };
