const axios = require('axios')
const { getMockReq, getMockRes } = require('@jest-mock/express')
const { getCategory } = require('./getCategory')

jest.mock('axios')

const { res, clearMockRes } = getMockRes()

beforeEach(() => {
  clearMockRes()
})

test('return categories', async () => {
  axios.get.mockResolvedValue({
    data: {
      path_from_root: [
        { name: 'Musica' }, 
        { name: 'Guitarras' }
      ]
    }
  })
  const req = getMockReq({ params: { id: 'ML1234567' } })

  await getCategory(req, res)

  expect(res.send).toHaveBeenCalledWith(
    expect.objectContaining({
      categories: ['Musica', 'Guitarras'],
    }),
  )
})

test('return missing param', async () => {
  axios.get.mockResolvedValue({})
  const req = getMockReq({})

  await getCategory(req, res)

  expect(res.status).toHaveBeenCalledWith(400)
  expect(res.send).toHaveBeenCalledWith(
    expect.objectContaining({ message: 'Missing param' })
  )
})

test('return error', async () => {
  axios.get.mockRejectedValueOnce({ 
    response: { status: 500 }, 
    message: 'internal error'
  })
  const req = getMockReq({ params: { id: 'ML1234567' } })

  await getCategory(req, res)

  expect(res.status).toHaveBeenCalledWith(500)
  expect(res.send).toHaveBeenCalledWith(
    expect.objectContaining({ message: 'internal error' })
  )
})