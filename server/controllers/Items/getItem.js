const axios = require('axios')
const { API_URL, AUTHOR } = require('../../constants')

module.exports = {
  getItem: async (req, res) => {
    if (!req.params.id) {
      res.status(400).send({ message: 'Missing param' })
    }

    try {
      let item = { description: '' }

      const { data } = await axios.get(`${API_URL}/items/${req.params.id}`)

      item = {
        ...item,
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price?.toString().split('.')[0] || '',
          decimals: data.price?.toString().split('.')[1] || ''
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data.shipping?.free_shipping || false,
        sold_quantity: data.sold_quantity,
        category_id: data.category_id
      }

      const descriptionData = await axios.get(`${API_URL}/items/${req.params.id}/description`)

      item.description = descriptionData.data.plain_text
            
      res.send({
        author: AUTHOR,
        item
      })
    } catch (error) {
      res.status(error.response?.status ||500).send({ message: error.message })
    }
  }
}