import Immutable from 'seamless-immutable';
import { getCurations, getCuration } from '../../api';

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
  if (!action.payload) return immutableState;
  switch (action.type) {
    case CURATIONS_FETCHED:
      return immutableState.merge({
        curations: action.payload,
      });
    case CURATION_FETCHED:
      console.log('payload', action.payload);
      return immutableState.merge({
        currentCuration: action.payload,
      });
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
