import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { render, waitFor, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MainTheme } from '../../themes/MainTheme'
import { MainProvider } from '../../contexts/MainContext'
import ItemDescription from './ItemDescription'

jest.mock('axios')

const data = {
  item: {
    id: 'OCP1',
    title: 'La guitarra de Jimi hendrix',
    condition: 'new',
    sold_quanttity: 1,
    description: 'La verdadera',
    price: {
      amount: '100000',
      decimals: ''
    }
  }
}

const renderItemsList = () => render(
  <ThemeProvider theme={MainTheme}>
    <BrowserRouter>
      <MainProvider>
        <ItemDescription />
      </MainProvider>
    </BrowserRouter>
  </ThemeProvider>
)

test('render item description', async() => {
  axios.get.mockResolvedValue({ data })
    
  renderItemsList()

  const loading = screen.getByText('Cargando...')
  expect(loading).toBeInTheDocument()

  await waitFor(() => {
    const itemsList = screen.getByTestId('Item_description')
    expect(itemsList).toBeInTheDocument()
    
    const title = screen.getByText('La guitarra de Jimi hendrix')
    expect(title).toBeInTheDocument()
    
    const description = screen.getByText('La verdadera')
    expect(description).toBeInTheDocument()
    
    const buyButton = screen.getByText('Comprar')
    expect(buyButton).toBeInTheDocument()

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

