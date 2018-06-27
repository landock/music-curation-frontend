
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import EditCurationView from '.'

it('EditCurationView: default', () => {
  const component = renderer.create(<EditCurationView />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})