/* eslint-disable no-undef */
const express = require('express') 
const axios = require('axios') 

const app = express()

app.listen({port: 4000}, () => {
  console.log('App server now listening to port 4000')
})

app.get('/', (req, res) => {
  res.send('holaaa')
})

app.get('/api/items', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  
  if (!req.query.q) {
    res.status(404).send({ 
      success: false,
      message: 'Missing query'
    })
  }

  let items = []

  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    .then(function ({ data: { results, filters } }) {

      const categoryValues = filters.find(filter => filter.id === 'category')?.values[0]
      const categories = categoryValues?.path_from_root.map(path => path.name) || []
      
      for (let i = 0; i < 4; i++) {
        items.push({
          id: results[i].id,
          title: results[i].title,
          price: {
            currency: results[i].currency_id,
            amount: results[i].price.toString().split('.')[0],
            decimals: results[i].price.toString().split('.')[1]
          },
          picture: results[i].thumbnail,
          condition: results[i].condition,
          free_shipping: results[i].shipping.free_shipping
        })
      }

      res.send({
        success: true,
        author: {
          name: 'Nicolás',
          lastname: 'Román'
        },
        categories,
        items
      })
    })
    .catch(function (error) {
      res.status(500).send(error)
    })
    .then(function () {
    // always executed
    })

})

app.get('/api/items/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')

  if (!req.params.id) {
    res.status(404).send({ 
      success: false,
      message: 'Missing param'
    })
  }
  
  let item = {}

  axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)
    .then(function ({ data }) {

      // const categoryValues = filters.find(filter => filter.id === 'category')?.values[0]
      // const categories = categoryValues?.path_from_root.map(path => path.name) || []
      
      item = {
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
        sold_quantity: data.sold_quantity
      }
    })
    .catch(function (error) {
      res.status(500).send(error)
    })
    .then(function () {
      axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)
        .then(function ({ data }) {
          item.description = data.plain_text
          
          res.send({
            success: true,
            author: {
              name: 'Nicolás',
              lastname: 'Román'
            },
            // categories,
            item
          })
        })
        .catch(function (error) {
          res.status(500).send(error)
        })
    })

})