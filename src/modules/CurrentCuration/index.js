import Immutable from 'seamless-immutable';

const initialState = {};
const ADD_CURATION_TRACK =
  'music-curation-frontend/curations/ADD_CURATION_TRACK';
const types = {
  ADD_CURATION_TRACK,
};
// Reducer
function reducer(state = initialState, action = {}) {
  const { payload, type } = action;
  if (!payload) return state;
  switch (action.type) {
    case ADD_CURATION_TRACK:
      debugger;
      state.entities.curations[state.result].tracks.push(payload.id);
      state.entities.tracks[payload.id] = payload;
      return { ...state };
    default:
      return state;
  }
}
export default reducer;
