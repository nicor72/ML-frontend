import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { MainProvider } from '../../contexts/MainContext'
import ItemBox from './ItemBox'

const item = {
  title: 'Eine Reise durch die Zeit, H.G. Tannhaus',
  condition: 'new',
  location: 'Winden',
  picture: 'url',
  price: {
    amount: '5000',
  }
}

const renderItemBox = (item) => render(
  <BrowserRouter>
    <MainProvider>
      <ItemBox 
        item={item}
      />
    </MainProvider>
  </BrowserRouter>
)

test('render item box', async() => {
    
  renderItemBox(item)

  const itemBox = screen.getByTestId('Item_box')
  expect(itemBox).toBeInTheDocument()

  const title = screen.getByText('Eine Reise durch die Zeit, H.G. Tannhaus')
  expect(title).toBeInTheDocument()

  const location = screen.getByText('Winden')
  expect(location).toBeInTheDocument()
})

test('render item box with empty item', async() => {
    
  renderItemBox({})

  const itemBox = screen.getByTestId('Item_box')
  expect(itemBox).toBeInTheDocument()
})

test('render item box with empty item', async() => {
    
  render(
    <BrowserRouter>
      <MainProvider>
        <ItemBox item={{}}/>
      </MainProvider>
    </BrowserRouter>
  )

  const itemBox = screen.getByTestId('Item_box')
  expect(itemBox).toBeInTheDocument()
})

