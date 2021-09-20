const express = require('express')
const routes = require('./server/routes')

const app = express()

app.listen({port: 4000}, () => {
  console.log('App server now listening to port 4000')
})

app.use('/', routes)
