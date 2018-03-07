---
to: src/modules/<%= name %>.js
---
// Actions
const ACTION = 'my-app/<%= name %>/ACTION';

const initialState = {}; 
// Reducer
export default function reducer(state = initialState, action = {})
switch(action.type) {
    //do reducer stuff
    default: return state;
}

// Action Creators
export function getAction() {
    return { type: ACTION};
}


