---
inject: true
to: src/modules/configureStore.js
skip_if:   <%= h.pascalCase(name) %>,
after: "router: routerReducer,"
---
  <%= h.pascalCase(name) %>, 