import { render, screen } from '@testing-library/react'
import App from './App'

test('renders logo', () => {
  render(<App />)
  const Logo = screen.getByTestId('Logo_img')
  expect(Logo).toBeInTheDocument()
})
