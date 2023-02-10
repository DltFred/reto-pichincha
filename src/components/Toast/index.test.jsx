import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Toast } from '.'
import icon from '../../assets/Search.svg'

describe('Toast', () => {
  test('Should render toast component', () => {
    render(<Toast message='mock message' />)
    expect(screen.getByText('mock message')).toBeDefined()
  })
  test('Should render toast component with image', () => {
    render(<Toast message='mock message' image={icon} />)
    expect(screen.getByRole('img')).toBeDefined()
  })
})
