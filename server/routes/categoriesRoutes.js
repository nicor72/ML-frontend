const express = require('express')
const { getCategory } = require('../controllers/Categories/')

const itemsRouter = express.Router()

itemsRouter.get('/api/categories/:id', getCategory)

module.exports = itemsRouter