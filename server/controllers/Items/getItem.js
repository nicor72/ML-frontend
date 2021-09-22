const axios = require('axios')
const { API_URL, AUTHOR } = require('../../constants')

module.exports = {
  getItem: (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')

    if (!req.params.id) {
      res.status(404).send({ message: 'Missing param' })
    }
  
    let item = { description: '' }

    axios.get(`${API_URL}/items/${req.params.id}`)
      .then(function ({ data }) {
        item = {
          ...item,
          id: data.id,
          title: data.title,
          price: {
            currency: data.currency_id,
            amount: data.price.toString().split('.')[0],
            decimals: data.price.toString().split('.')[1]
          },
          picture: data.thumbnail,
          condition: data.condition,
          free_shipping: data.shipping.free_shipping,
          sold_quantity: data.sold_quantity,
          category_id: data.category_id
        }
      })
      .catch(function (error) {
        res.status(error.response.status).send({ message: error.message })
      })
      .then(function () {
        axios.get(`${API_URL}/items/${req.params.id}/description`)
          .then(function ({ data }) {
            item.description = data.plain_text
          
            res.send({
              author: AUTHOR,
              item
            })
          })
          .catch(function (error) {
            res.status(error.response.status).send({ message: error.message })
          })
      })
  }
}