import Immutable from 'seamless-immutable';
import { getCurations, getCuration, getTrackById } from '../../api';
import { normalize } from 'normalizr';
import { curationList, curation } from '../../schema';
import { merge } from 'lodash';
import { stat } from 'fs';

// Actions
const CURATIONS_FETCHED = 'music-curation-frontend/curations/CURATIONS_FETCHED';
const CURATION_FETCHED = 'music-curation-frontend/curations/CURATION_FETCHED';
const ADD_CURATION_TRACK =
  'music-curation-frontend/curations/ADD_CURATION_TRACK';
const types = {
  CURATIONS_FETCHED,
  CURATION_FETCHED,
  ADD_CURATION_TRACK,
};

// Reducer
function reducer(state = {}, action = {}) {
  const { payload, type } = action;
  let normalizedData;
  if (!payload) return state;
  switch (type) {
    case CURATIONS_FETCHED:
      normalizedData = normalize(payload, curationList);
      state = merge(state, normalizedData);
      return { ...state };
    case CURATION_FETCHED:
      normalizedData = normalize(payload, curation);
      state = merge(state, normalizedData);
      return { ...state };
    case ADD_CURATION_TRACK:
      const isNotCached =
        !state.entities ||
        !state.entities.tracks ||
        !state.entities.tracks[payload.id];
      if (!isNotCached) return { ...state };
      getTrackById(payload.id).then(result => {
        state.entities.curations[state.result].tracks.push(payload.id);
        state.entities.tracks[payload.id] = result;
        return { ...state };
      });

    default:
      return state;
  }
}

// Action Creators
function curationsFetched(payload) {
  return { type: CURATIONS_FETCHED, payload: payload };
}

function curationFetched(payload) {
  debugger;
  return { type: CURATION_FETCHED, payload: payload };
}

function fetchCurations() {
  return dispatch => {
    return getCurations().then(body => dispatch(curationsFetched(body)));
  };
}

function fetchCuration(id) {
  return dispatch => {
    return getCuration(id).then(body => {
      debugger;
      return dispatch(curationFetched(body));
    });
  };
}

const actions = {
  fetchCurations,
  fetchCuration,
  curationsFetched,
};

export { types, actions };
export default reducer;
