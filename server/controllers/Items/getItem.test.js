const axios = require('axios')
const { getMockReq, getMockRes } = require('@jest-mock/express')
const { getItem } = require('./getItem')

jest.mock('axios')

const { res, clearMockRes } = getMockRes()

beforeEach(() => {
  clearMockRes()
})

test('return item', async () => {
  axios.get.mockResolvedValue({
    data: {
      id: 'MA1234',
      title: 'Bajo Electrico',
      currency_id: 'ARS',
      price: 1300.50,
      pictures: [{ url: '' }],
      condition: 'new',
      shipping: {
        free_shipping: false,
      },
      sold_quantity: 10,
      category_id: 'MA9876',
      plain_text: 'description'
    }
  })
  const req = getMockReq({ params: { id: 'ML1234567' } })

  await getItem(req, res)

  expect(res.send).toHaveBeenCalledWith(
    expect.objectContaining({
      'author': {'lastname': 'Román', 'name': 'Nicolás'},
      item: {
        category_id: 'MA9876', 
        condition: 'new', 
        description: 'description', 
        free_shipping: false, 
        id: 'MA1234', 
        picture: '', 
        price: {
          currency: 'ARS', 
          amount: '1300', 
          decimals: '5'
        }, 
        sold_quantity: 10,
        title: 'Bajo Electrico'
      }
    }),
  )
})

test('return missing param', async () => {
  axios.get.mockResolvedValue({})
  const req = getMockReq({})

  await getItem(req, res)

  expect(res.status).toHaveBeenCalledWith(400)
  expect(res.send).toHaveBeenCalledWith(
    expect.objectContaining({ message: 'Missing param' })
  )
})

test('return error', async () => {
  axios.get.mockRejectedValueOnce({ 
    response: { status: 404 }, 
    message: 'not found'
  })
  const req = getMockReq({ params: { id: 'ML1234567' } })

  await getItem(req, res)

  expect(res.status).toHaveBeenCalledWith(404)
  expect(res.send).toHaveBeenCalledWith(
    expect.objectContaining({ message: 'not found' })
  )
})
