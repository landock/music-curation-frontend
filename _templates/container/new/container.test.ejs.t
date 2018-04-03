---
to: src/container/<%= name %>/<%= name %>.test.js
---
<% const comp = h.inflection.classify(name) %>import React from 'react'
import renderer from 'react-test-renderer'
import <%= comp %> from '.'

it('<%= comp %>: default', () => {
  const component = renderer.create(<<%= comp %> />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})