const express = require('express')
const { itemsRouter, categoriesRouter } = require('./server/routes')

const app = express()

app.listen({port: 4000}, () => {
  console.log('App server now listening to port 4000')
})

app.use('/', itemsRouter)
app.use('/', categoriesRouter)
