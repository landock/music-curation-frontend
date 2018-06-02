import Immutable from 'seamless-immutable';
import { getCurations, getCuration } from '../../api';
import { normalize } from 'normalizr';
import { curationList, curation } from '../../schema';

// Actions
const CURATIONS_FETCHED = 'music-curation-frontend/curations/CURATIONS_FETCHED';
const CURATION_FETCHED = 'music-curation-frontend/curations/CURATION_FETCHED';
const types = {
  CURATIONS_FETCHED,
  CURATION_FETCHED,
};

// Reducer
function reducer(state = {}, action = {}) {
  const immutableState = Immutable(state);
  const { payload, type } = action;
  let normalizedData;
  if (!payload) return immutableState;
  switch (type) {
    case CURATIONS_FETCHED:
      normalizedData = normalize(payload, curationList);
      return immutableState.merge(normalizedData);
    case CURATION_FETCHED:
      normalizedData = normalize(payload, curation);
      return immutableState.merge(normalizedData);
    default:
      return immutableState;
  }
}

// Action Creators
function curationsFetched(payload) {
  return { type: CURATIONS_FETCHED, payload: payload };
}

function curationFetched(payload) {
  return { type: CURATION_FETCHED, payload: payload };
}

function fetchCurations() {
  return dispatch => {
    return getCurations().then(body =>
      dispatch(curationsFetched(Immutable(body)))
    );
  };
}

function fetchCuration(id) {
  return dispatch => {
    return getCuration(id).then(body => {
      return dispatch(curationFetched(Immutable(body)));
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
