// build your server here and require it from index.js
const express = require('express')

const ProjectRouter = require('./project/router')
const ResourceRouter = require('./resource/router')

const server = express()

server.use(express.json())

server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
    res.status(500).json({
      message: 'something went wrong inside the accounts router',
      errMessage: err.message,
    })
  })

module.exports = server