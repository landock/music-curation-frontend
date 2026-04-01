const TAGS_FETCHED = 'music-curation-frontend/tags/TAGS_FETCHED';
const types = { TAGS_FETCHED };

function reducer(state = {}, action = {}) {
  const { payload, type } = action;
  if (!payload) return state;
  switch (type) {
    case TAGS_FETCHED:
      return { ...state, tags: payload };
    default:
      return { ...state };
  }
}

export { types };
export default reducer;
