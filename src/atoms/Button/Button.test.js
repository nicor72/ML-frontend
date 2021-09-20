import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MainTheme } from '../../themes/MainTheme'
import Button from './Button'
import 'jest-styled-components'

test('button renders with child', () => {
  const child = 'Test Button'

  render(
    <ThemeProvider theme={MainTheme}>
      <Button>{child}</Button>
    </ThemeProvider>
  )

  const button = screen.getByText(child)
  expect(button).toBeInTheDocument()
})

test('button renders without child', () => {
  render(
    <ThemeProvider theme={MainTheme}>
      <Button />
    </ThemeProvider>
  )

  const button = screen.getByTestId('Atom_button')
  expect(button).toBeInTheDocument()
})

test('button primary renders', () => {
  render(
    <ThemeProvider theme={MainTheme}>
      <Button variant="primary">Primary</Button>
    </ThemeProvider>
  )

  const button = screen.getByText('Primary')
  expect(button).toHaveStyleRule('color', '#fff')
  expect(button).toHaveStyleRule('background-color', '#3483fa')
})

test('renders button without variant', () => {
  render(
    <ThemeProvider theme={MainTheme}>
      <Button>Not Primary</Button>
    </ThemeProvider>
  )

  const button = screen.getByText('Not Primary')
  expect(button).toHaveStyleRule('color', undefined)
  expect(button).toHaveStyleRule('background-color', undefined)
})