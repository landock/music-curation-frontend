
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import Tag from '.'

it('Tag: default', () => {
  const component = renderer.create(<Tag />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})