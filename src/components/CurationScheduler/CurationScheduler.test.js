
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import CurationScheduler from '.'

it('CurationScheduler: default', () => {
  const component = renderer.create(<CurationScheduler />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})