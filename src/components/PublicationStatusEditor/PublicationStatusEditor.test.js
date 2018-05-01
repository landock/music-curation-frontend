
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import PublicationStatusEditor from '.'

it('PublicationStatusEditor: default', () => {
  const component = renderer.create(<PublicationStatusEditor />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})