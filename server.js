const express = require('express')
const { itemsRouter, categoriesRouter } = require('./server/routes')

const app = express()

app.listen({port: 4000}, () => {
  console.log('App server now listening to port 4000')
})

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*'])
  res.append('Access-Control-Allow-Methods', 'GET')
  res.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use('/', itemsRouter)
app.use('/', categoriesRouter)
