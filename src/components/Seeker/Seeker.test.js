import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Seeker from './Seeker'

test('renders input', () => {
  render(
    <Seeker />
  )

  const seeker = screen.getByTestId('Seeker_input')
  expect(seeker).toBeInTheDocument()
  expect(seeker).toHaveAttribute('placeholder', 'Nunca dejes de buscar')
})

test('change input value', () => {
  render(
    <Seeker />
  )

  const seeker = screen.getByTestId('Seeker_input')
  fireEvent.change(seeker, { target: {value: 'Guitarra gibson' }})
  expect(seeker).toHaveAttribute('value', 'Guitarra gibson')
})

test('renders submit button', () => {
  render(
    <Seeker />
  )
  
  const submitButton = screen.getByTestId('Seeker_submit')
  expect(submitButton).toBeInTheDocument()
  expect(submitButton).toHaveAttribute('type', 'submit')
})

test('click submit button', () => {
  render(
    <Seeker />
  )
  
  const submitButton = screen.getByTestId('Seeker_submit')
  fireEvent.click(submitButton)
})