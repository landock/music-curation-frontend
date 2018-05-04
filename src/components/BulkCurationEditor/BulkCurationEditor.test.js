
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import BulkCurationEditor from '.'

it('BulkCurationEditor: default', () => {
  const component = renderer.create(<BulkCurationEditor />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})