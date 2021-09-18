import { render, screen } from '@testing-library/react'
import Button from './Button'
import 'jest-styled-components'

test('button renders with child', () => {
  const child = 'Test Button'

  render(
    <Button>{child}</Button>
  )

  const button = screen.getByText(child)
  expect(button).toBeInTheDocument()
})

test('button renders without child', () => {
  render(<Button />)

  const button = screen.getByTestId('Atom_button')
  expect(button).toBeInTheDocument()
})

test('button primary renders', () => {
  render(
    <Button variant="primary">Primary</Button>
  )

  const button = screen.getByText('Primary')
  expect(button).toHaveStyleRule('color', '#fff')
  expect(button).toHaveStyleRule('background-color', '#3483fa')
})

test('button not primary renders', () => {
  render(
    <Button>Not Primary</Button>
  )

  const button = screen.getByText('Not Primary')
  expect(button).toHaveStyleRule('color', '#3483fa')
  expect(button).toHaveStyleRule('background-color', '#DBE8FA')
})