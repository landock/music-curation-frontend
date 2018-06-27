---
to: src/containers/<%= h.pascalCase(name) %>/<%= h.pascalCase(name) %>.test.js
---
<% const container = h.pascalCase(name) %>
import React from 'react'
import renderer from 'react-test-renderer'
import <%= container %> from '.'

describe('<%= container %>', () => {
  it('should do something with <%= container %>', () => {})
})