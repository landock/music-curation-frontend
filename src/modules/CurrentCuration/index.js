import { normalize } from 'normalizr';
import { merge } from 'lodash';

import { curation } from '../../schema';

const initialState = {};
const ADD_CURATION_TRACK =
  'music-curation-frontend/curations/ADD_CURATION_TRACK';
const CURATION_FETCHED = 'music-curation-frontend/curations/CURATION_FETCHED';

function reducer(state = initialState, action = {}) {
  const { payload, type } = action;
  if (!payload) return state;
  switch (type) {
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

function addCurationTrack(payload) {
  return { type: ADD_CURATION_TRACK, payload };
}

const types = {
  ADD_CURATION_TRACK,
  CURATION_FETCHED,
};

const actions = {
  addCurationTrack,
};
export { reducer as default, types, actions };
