import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test } from 'vitest'
import { Button } from '.'

describe('Button', () => {
  afterEach(cleanup)

  test('render component', () => {
    const text = 'Guardar'
    render(<Button>{text}</Button>)
    expect(screen.getByText(text)).toBeDefined()
  })
  test('should execute click when clicking', () => {
    let text = 'Guardar'
    render(<Button onClick={() => { text = 'Clicked' }}>{text}</Button>)
    fireEvent.click(screen.getByText('Guardar'))
    render(<Button>{text}</Button>)
    expect(screen.getByText('Clicked')).toBeDefined()
  })
  test('should is disable, no execute click', async () => {
    let text = 'Guardar'
    const user = userEvent.setup()
    render(<Button onClick={() => { text = 'Clicked' }} disabled>{text}</Button>)
    await user.click(screen.getByText('Guardar'))
    render(<Button>{text}</Button>)
    expect(screen.queryByText('Clicked')).toBeNull()
  })
})
