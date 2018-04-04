---
to: src/containers/<%= h.pascalCase(name) %>/<%= h.pascalCase(name) %>.test.js
---
<% const container = h.pascalCase(name) %>
import React from 'react'
import renderer from 'react-test-renderer'
import <%= container %> from '.'

it('<%= container %>: default', () => {
  const component = renderer.create(<<%= container %> />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})