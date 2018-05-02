
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import ModifyCuration from '.'

it('ModifyCuration: default', () => {
  const component = renderer.create(<ModifyCuration />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})