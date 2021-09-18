import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const Logo = screen.getByTestId('Logo_img')
  expect(Logo).toBeInTheDocument()
})
