import Immutable from 'seamless-immutable';

const initialState = Immutable({});

const TRACKS_FETCHED = 'music-curation-frontend/tracks/TRACKS_FETCHED';
const types = {
  TRACKS_FETCHED,
};
// Reducer
function reducer(state = initialState, action = {}) {
  const immutableState = Immutable(state);
  switch (action.type) {
    case TRACKS_FETCHED:
      console.log('tracks_fretchd', action);
      return immutableState.merge({
        searchResults: action.payload,
      });
    default:
      return state;
  }
}

export { reducer as default, types };
