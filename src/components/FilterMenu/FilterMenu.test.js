
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import FilterMenu from '.'

it('FilterMenu: default', () => {
  const component = renderer.create(<FilterMenu />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})