
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import SearchResultCollection from '.'

it('SearchResultCollection: default', () => {
  const component = renderer.create(<SearchResultCollection />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})