import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'
import { render, waitFor, screen, act, fireEvent } from '@testing-library/react'
import { MainProvider } from '../../contexts/MainContext'
import ItemsList from './ItemsList'

let testLocation
jest.mock('axios')

const data = {
  items: [
    {
      id: 'MLA1',
      title: 'Buy milk',
      price: {
        amount: '1000',
      }
    }
  ]
}

const renderItemsList = () => render(
  <BrowserRouter>
    <MainProvider>
      <ItemsList />
      <Route
        path="*"
        render={({ location }) => {
          testLocation = location
          return null
        }}
      />
    </MainProvider>
  </BrowserRouter>
)

test('render one item in items list', async() => {
  axios.get.mockResolvedValue({ data })
    
  renderItemsList()

  const loading = screen.getByText('Cargando...')
  expect(loading).toBeInTheDocument()

  await waitFor(() => {
    const itemsList = screen.getByTestId('Items_list')
    expect(itemsList).toBeInTheDocument()
    
    const itemsBoxes = screen.getAllByTestId('Item_box')
    expect(itemsBoxes).toHaveLength(1)

    const item = screen.getByText('Buy milk')
    expect(item).toBeInTheDocument()
  })
})

test('renders two items', async() => {
  data.items.push({
    id: 'ML2',
    title: 'Buy Beer',
    price: {
      amount: '2000',
    }
  })
  axios.get.mockResolvedValue({ data })
    
  renderItemsList()

  await waitFor(() => {
    const item1 = screen.getByText('Buy milk')
    expect(item1).toBeInTheDocument()

    const itemsBoxes = screen.getAllByTestId('Item_box')
    expect(itemsBoxes).toHaveLength(2)

    const item2 = screen.getByText('Buy Beer')
    expect(item2).toBeInTheDocument()
  })
})

test('empty list', async() => {
  axios.get.mockResolvedValue({ data: { items: [] }})
    
  renderItemsList()

  await waitFor(() => {
    const itemsList = screen.getByTestId('Items_list')
    expect(itemsList).toBeInTheDocument()

    const itemsBoxes = screen.queryAllByTestId('Item_box')
    expect(itemsBoxes).toHaveLength(0)
  })
})

test('renders error', async() => {
  axios.get.mockRejectedValueOnce(new Error(''))
    
  renderItemsList()

  await waitFor(() => {
    const error = screen.getByText(/Error/i)
    expect(error).toBeInTheDocument()
  })
})

test('expects change location after click item', async() => {
  axios.get.mockResolvedValue({ data })
    
  renderItemsList()

  await waitFor(() => {
    const itemsList = screen.getByTestId('Items_list')
    expect(itemsList).toBeInTheDocument()
  })

  act(() => {
    fireEvent.click(screen.getByText(/Buy milk/i))
  })

  expect(testLocation.pathname).toBe('/items/MLA1')
})