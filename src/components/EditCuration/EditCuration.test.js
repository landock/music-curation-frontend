
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import EditCuration from '.'

it('EditCuration: default', () => {
  const component = renderer.create(<EditCuration />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})