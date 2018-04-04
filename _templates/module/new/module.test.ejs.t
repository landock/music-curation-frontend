---
to: src/modules/<%= h.pascalCase(name) %>/<%= h.pascalCase(name) %>.test.js
---
<% const module = h.pascalCase(name) %>
import React from 'react'
import renderer from 'react-test-renderer'
import <%= module %> from '.'

it('<%= module %>: default', () => {
  const component = renderer.create(<<%= module %> />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})