import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, test } from 'vitest'
import { Spinner } from '.'

describe('Spinner', () => {
  afterEach(cleanup)
  test('Should render spinner component', () => {
    render(<Spinner />)
  })
})
