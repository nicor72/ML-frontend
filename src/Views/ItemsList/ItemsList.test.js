import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { render, waitFor, screen } from '@testing-library/react'
import { MainProvider } from '../../contexts/MainContext'
import ItemsList from './ItemsList'

jest.mock('axios')

test('testin api', async() => {
  axios.get.mockResolvedValue({
    data: {
      items: [
        {
          id: 1,
          title: 'Buy milk',
          price: {
            amount: '1000',
          }
        }
      ]
    }
  })
    
  render(
    <BrowserRouter>
      <MainProvider>
        <ItemsList />
      </MainProvider>
    </BrowserRouter>
  )

  await waitFor(() => {
    expect(screen.getByTestId('Items_list')).toBeInTheDocument()
  })
})