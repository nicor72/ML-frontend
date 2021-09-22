import { render, screen } from '@testing-library/react'
import ErrorComponent from './ErrorComponent'

test('renders 404', () => {
  render(
    <ErrorComponent 
      error={{
        response: {
          status: 404
        },
        message: 'not found'
      }}
    />
  )

  const error = screen.getByText(/Página no encontrada/i)
  expect(error).toBeInTheDocument()
})

test('renders default', () => {
  render(
    <ErrorComponent 
      error={{
        response: {
          status: 400
        },
        message: 'other status error'
      }}
    />
  )

  const error = screen.getByText(/other status error/i)
  expect(error).toBeInTheDocument()
})