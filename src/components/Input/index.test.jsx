import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import { Input } from '.'
import icon from '../../assets/Search.svg'
import { InputTypeRange } from './inputTypeRange'
import { InputWithImage } from './inputWithImage'

describe('Input', () => {
  afterEach(cleanup)

  test('render base component', () => {
    render(<Input />)
  })
  test('render base component with label', () => {
    render(<Input label='mock label' />)
    expect(screen.getByText('mock label'))
  })
  test('Shpuld render input with image', () => {
    render(<InputWithImage img={icon} />)
    expect(screen.getByRole('img'))
  })
  test('Shpuld render range input', () => {
    render(<InputTypeRange value={50} />)
    expect(screen.getByText('0'))
    expect(screen.getByText('100'))
    expect(screen.getByText('50'))
  })
})
