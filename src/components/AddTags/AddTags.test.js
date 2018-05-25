
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import AddTags from '.'

it('AddTags: default', () => {
  const component = shallow(<AddTags />)
  expect(component.text()).toEqual('<Header />Add Tags<TagCollection />')
})
