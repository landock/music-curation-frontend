---
inject: true
to: src/stories/index.js
skip_if: components/<%= h.pascalCase(name) %>
append: true
---
<% const comp = h.pascalCase(name) %>
import '../components/<%= comp %>/<%= comp %>.story'