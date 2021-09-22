const express = require('express')
const { searchItem, getItem } = require('../controllers/Items')

const itemsRouter = express.Router()

itemsRouter.get('/api/items', searchItem)
itemsRouter.get('/api/items/:id', getItem)

module.exports = itemsRouter