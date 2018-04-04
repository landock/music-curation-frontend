import Immutable from 'seamless-immutable';
import { getCurations } from '../../api';

// Actions
const CURATIONS_FETCHED = 'music-curation-frontend/curations/CURATIONS_FETCHED';
const types = {
  CURATIONS_FETCHED,
};

const initialState = Immutable({});

// Reducer
function reducer(state = initialState, action = {}) {
  const immutableState = Immutable(state);
  if (!action.payload) return immutableState;
  switch (action.type) {
    case CURATIONS_FETCHED:
      return immutableState.merge({
        curationsById: action.payload.curationsById,
      });
    default:
      return immutableState;
  }
}

// Action Creators
function curationsFetched(payload) {
  return { type: CURATIONS_FETCHED, payload: payload };
}

function fetchCurations() {
  return dispatch => {
    return getCurations().then(body =>
      dispatch(curationsFetched(Immutable(body)))
    );
  };
}

const actions = {
  fetchCurations,
  curationsFetched,
};

export { types, actions };
export default reducer;
