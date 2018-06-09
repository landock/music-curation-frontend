import Immutable from 'seamless-immutable';
import { getCurations, getTrackById } from '../../api';
import { normalize } from 'normalizr';
import { curationList } from '../../schema';
import { merge } from 'lodash';
import { stat } from 'fs';

// Actions
const CURATIONS_FETCHED = 'music-curation-frontend/curations/CURATIONS_FETCHED';
const types = {
  CURATIONS_FETCHED,
};

// Reducer
function reducer(state = {}, action = {}) {
  const { payload, type } = action;
  if (!payload) return state;
  switch (type) {
    case CURATIONS_FETCHED:
      let normalizedData = normalize(payload, curationList);
      state = merge(state, normalizedData);
      return { ...state };

    default:
      return state;
  }
}

// Action Creators
function curationsFetched(payload) {
  return { type: CURATIONS_FETCHED, payload: payload };
}

function fetchCurations() {
  return dispatch => {
    return getCurations().then(body => dispatch(curationsFetched(body)));
  };
}

const actions = {
  fetchCurations,
  curationsFetched,
};

export { types, actions };
export default reducer;
