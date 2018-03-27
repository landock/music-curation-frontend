import Immutable from 'seamless-immutable';

// Actions
const CURATIONS_FETCHED = 'music-curation-frontend/curations/CURATIONS_FETCHED';
const actions = {
  CURATIONS_FETCHED,
};

const initialState = Immutable({});
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CURATIONS_FETCHED:
      return state.merge({
        curationsById: action.payload.curationsById,
      });
    //do reducer stuff
    default:
      return state;
  }
}
// Action Creators
export function fetchCurations() {
  return (dispatch, getState) => {
    dispatch({ type: CURATIONS_FETCHED, payload: {} });
  };
}

export { actions };
