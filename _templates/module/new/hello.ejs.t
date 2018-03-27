---
to: src/redux/modules/<%= name %>.js
---
import Immutable from 'seamless-immutable';
 
// Actions
const <%= action %> = 'music-curation-frontend/<%= name %>/<%= action %>';

const initialState = Immutable({});
// Reducer
export default function reducer(state = initialState, action = {})
switch(action.type) {
    case '<%= action %>':
      //do reducer stuff
    default: return state;
}

// Action Creators
export function getAction() {
    return { type: <%= action %> };
}


