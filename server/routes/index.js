const express = require('express')
const axios = require('axios') 
const { API_URL, AUTHOR } = require('../constants')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('App server now listening to port 4000')
})

router.get('/api/items', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  
  if (!req.query.q) {
    res.status(404).send({ 
      success: false,
      message: 'Missing query'
    })
  }

  let items = []
  let categories = []

  axios.get(`${API_URL}/sites/MLA/search?q=${req.query.q}${req.query.limit ? `&limit=${req.query.limit}` : ''}`)
    .then(function ({ data: { results, filters } }) {

      if (results.length) {
        const categoryValues = filters.find(filter => filter.id === 'category')?.values[0]
        categories = categoryValues?.path_from_root.map(path => path.name) || []
        
        items = results.map(item => ({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price.toString().split('.')[0],
            decimals: item.price.toString().split('.')[1]
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          location: item.address.city_name
        }))
      }

      res.send({
        success: true,
        author: AUTHOR,
        categories,
        items
      })
    })
    .catch(function (error) {
      res.status(500).send({ message: error.message })
    })
})

router.get('/api/items/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!req.params.id) {
    res.status(404).send({ 
      success: false,
      message: 'Missing param'
    })
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
      res.status(500).send(error)
    })
    .then(function () {
      axios.get(`${API_URL}/items/${req.params.id}/description`)
        .then(function ({ data }) {
          item.description = data.plain_text
          
          res.send({
            success: true,
            author: AUTHOR,
            item
          })
        })
        .catch(function (error) {
          res.status(500).send(error)
        })
    })
})

router.get('/api/categories/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  
  if (!req.params.id) {
    res.status(404).send({ 
      success: false,
      message: 'Missing param'
    })
  }

  let categories = []

  axios.get(`${API_URL}/categories/${req.params.id}`)
    .then(function ({ data }) {

      if (data) {
        categories = data.path_from_root.map(path => path.name)
      }

      res.send({
        success: true,
        author: AUTHOR,
        categories
      })
    })
    .catch(function (error) {
      res.status(500).send({ message: error.message })
    })
})

module.exports = router