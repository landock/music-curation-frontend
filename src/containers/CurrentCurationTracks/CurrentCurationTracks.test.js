
import React from 'react'
import renderer from 'react-test-renderer'
import CurrentCurationTracks from '.'

it('CurrentCurationTracks: default', () => {
  const component = renderer.create(<CurrentCurationTracks />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})