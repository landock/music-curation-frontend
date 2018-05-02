
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import AddToCuration from '.'

it('AddToCuration: default', () => {
  const component = renderer.create(<AddToCuration />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})