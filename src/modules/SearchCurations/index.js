import { normalize } from 'normalizr';
import { curationList } from '../../schema';
import { merge } from 'lodash';

const SEARCH_CURATIONS_FETCHED =
  'music-curation-frontend/curations/SEARCH_CURATIONS_FETCHED';
const types = {
  SEARCH_CURATIONS_FETCHED,
};

const initialState = {};
// Reducer
function reducer(state = initialState, action = {}) {
  const { payload, type } = action;
  switch (type) {
    case SEARCH_CURATIONS_FETCHED:
      let normalizedData = normalize(payload, curationList);
      state = merge(state, normalizedData);
      return { ...state };
    default:
      return { ...state };
  }
}
export { reducer as default, types };
