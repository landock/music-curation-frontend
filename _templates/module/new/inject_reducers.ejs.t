---
inject: true
to: src/modules/configureStore.js
skip_if: import <%= h.pascalCase(name) %> from '../modules/<%= h.pascalCase(name) %>' 
after: "import Curations from '../modules/Curations';"
---
<% const module = h.pascalCase(name) -%>
import <%= module %> from '../modules/<%= module %>';