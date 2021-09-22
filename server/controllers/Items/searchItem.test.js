const axios = require('axios')
const { getMockReq, getMockRes } = require('@jest-mock/express')
const { searchItem } = require('./searchItem')

jest.mock('axios')

const { res, clearMockRes } = getMockRes()

beforeEach(() => {
  clearMockRes()
})

test('return item', async () => {
  axios.get.mockResolvedValue({
    data: {
      results: [
        {
          id: 'MA1234',
          title: 'Guitarra Electrica',
          currency_id: 'ARS',
          price: 1300.50,
          thumbnail: '',
          condition: 'new',
          shipping: {
            free_shipping: false,
          },
          sold_quantity: 10,
          category_id: 'MA9876',
          plain_text: 'description',
          address: {
            city_name: 'Almagro'
          }
        }
      ],
      filters: [
        {
          id: 'category',
          values: [
            {
              path_from_root: [
                { name: 'Musica' }, 
                { name: 'Guitarras' }
              ]
            }
          ]
        }
      ]
    }
  })
  const req = getMockReq({ query: { q: 'guitarras' } })

  await searchItem(req, res)

  expect(res.send).toHaveBeenCalledWith(
    expect.objectContaining({
      items: [{
        condition: 'new',
        free_shipping: false, 
        id: 'MA1234', 
        picture: '', 
        price: {
          currency: 'ARS', 
          amount: '1300', 
          decimals: '5'
        },
        title: 'Guitarra Electrica',
        location: 'Almagro'
      }]
    })
  )
})

test('return missing query', async () => {
  axios.get.mockResolvedValue({})
  const req = getMockReq({})

  await searchItem(req, res)

  expect(res.status).toHaveBeenCalledWith(400)
  expect(res.send).toHaveBeenCalledWith(
    expect.objectContaining({ message: 'Missing query' })
  )
})
