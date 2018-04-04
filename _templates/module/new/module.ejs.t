---
to: src/modules/<%= h.pascalCase(name) %>/index.js
---
<% const uppercaseAction = locals.actionName ? h.screamingSnakeCase(locals.actionName) : null -%>
import Immutable from 'seamless-immutable';
<% if (locals.actionName) { -%>
// Actions
const <%= uppercaseAction %> = 'music-curation-frontend/<%= h.pascalCase(name) %>/<%= uppercaseAction %>';
const types = {
  <%= uppercaseAction %>,
};
<% } %>
const initialState = Immutable({});
// Reducer
function reducer(state = initialState, action = {})
switch(action.type) {
    <% if (locals.actionName) { -%>
    case '<%= uppercaseAction %>':
      //do reducer stuff
    <% } -%>
    default: return state;
}

<% if (locals.actionName) { -%>
// Action Creators
export function get<%= h.pascalCase(name) %>() {
    return { type: <%= uppercaseAction %> };
}

const actions = {
  get<%= h.pascalCase(name) %>,
};

export { types, actions };
<% } -%>
export default reducer;
