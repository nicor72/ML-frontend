import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

test('Renders seeker input', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const seeker = screen.getByTestId('Seeker_input')
  expect(seeker).toBeInTheDocument()
})

test('Renders logo img', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const logo = screen.getByTestId('Logo_img')
  expect(logo).toBeInTheDocument()
})