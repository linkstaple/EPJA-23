import renderer from 'react-test-renderer'
import Layout from '../src/components/Layout/Layout'
import React from 'react'

describe('Layout', () => {
  it('should render Layout', () => {
    const tree = renderer.create(<Layout />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
