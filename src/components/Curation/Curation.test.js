
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import Curation from '.'

it('Curation: default', () => {
  const component = renderer.create(<Curation />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})