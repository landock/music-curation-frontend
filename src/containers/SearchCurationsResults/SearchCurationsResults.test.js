
import React from 'react'
import renderer from 'react-test-renderer'
import SearchCurationsResults from '.'

it('SearchCurationsResults: default', () => {
  const component = renderer.create(<SearchCurationsResults />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})