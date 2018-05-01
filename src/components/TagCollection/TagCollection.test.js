
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import TagCollection from '.'

it('TagCollection: default', () => {
  const component = renderer.create(<TagCollection />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})