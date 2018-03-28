import Immutable from 'seamless-immutable';

// Actions
const CURATIONS_FETCHED = 'music-curation-frontend/curations/CURATIONS_FETCHED';
const types = {
  CURATIONS_FETCHED,
};

const initialState = Immutable({});
// Reducer
function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CURATIONS_FETCHED:
      return state.merge({
        curationsById: action.payload.curationsById,
      });
    default:
      return state;
  }
}

// Action Creators
function curationsFetched(payload) {
  return { type: CURATIONS_FETCHED, payload: payload };
}

function fetchCurations() {
  const url =
    'https://private-4cf18-musiccurationmanager.apiary-mock.com/yarn/curations';
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(body => dispatch(curationsFetched({ curationsById: body })));
  };
}

const actions = {
  fetchCurations,
  curationsFetched,
};

export { types, actions };
export default reducer;
