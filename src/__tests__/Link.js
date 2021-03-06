import React from 'react'
import renderer from 'react-test-renderer'
import { Link } from '..'

describe('Link', () => {
  test('renders', () => {
    const json = renderer.create(<Link>Hello</Link>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders underline', () => {
    const json = renderer.create(<Link underline>Underline</Link>).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-decoration', 'underline')
  })
})
