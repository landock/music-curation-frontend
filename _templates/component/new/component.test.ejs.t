---
to: src/components/<%= h.pascalCase(name) %>/<%= h.pascalCase(name) %>.test.js
---
<% const comp = h.pascalCase(name) %>
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import <%= comp %> from '.'

it('<%= comp %>: default', () => {
  const component = renderer.create(<<%= comp %> />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})