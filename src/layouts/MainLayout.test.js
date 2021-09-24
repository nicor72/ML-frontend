import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import { MainProvider } from '../contexts/MainContext'

test('renders content eith layout', () => {
  render(
    <BrowserRouter>
      <MainProvider>
        <MainLayout />
      </MainProvider>
    </BrowserRouter>
  )

  const logo = screen.getByTestId('Logo_img')
  const content = screen.getByTestId('Content_container')
  
  expect(logo).toBeInTheDocument()
  expect(content).toBeInTheDocument()
})
