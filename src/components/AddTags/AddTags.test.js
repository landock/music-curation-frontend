
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import AddTags from '.'

it('AddTags: default', () => {
  const component = renderer.create(<AddTags />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})