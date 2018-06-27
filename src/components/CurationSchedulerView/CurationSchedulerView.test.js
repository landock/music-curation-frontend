
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import CurationSchedulerView from '.'

it('CurationSchedulerView: default', () => {
  const component = renderer.create(<CurationSchedulerView />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})