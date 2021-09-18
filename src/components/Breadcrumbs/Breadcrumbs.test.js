import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs'

test('not render breadcrumbs on pathname root', () => {
  const { container } = render(
    <MemoryRouter>
      <Breadcrumbs />
    </MemoryRouter>
  )

  expect(container).toBeEmptyDOMElement()
})

test('renders when is not root path', () => {
  render(
    <MemoryRouter initialEntries={['/items']}>
      <Breadcrumbs />
    </MemoryRouter>
  )

  const bread = screen.getByTestId('Breadcrumbs_ul')
  expect(bread).toBeInTheDocument()
})

test('render with path prop', () => {
  render(
    <MemoryRouter initialEntries={['/items']}>
      <Breadcrumbs path={['Testing Category', 'Test deep category']}/>
    </MemoryRouter>
  )

  const start = screen.getByText(/Inicio/i)
  const firstCategory = screen.getByText(/Testing Category/i)
  const secondCategory = screen.getByText(/Test deep category/i)

  expect(start).toBeInTheDocument()
  expect(firstCategory).toBeInTheDocument()
  expect(secondCategory).toBeInTheDocument()

})