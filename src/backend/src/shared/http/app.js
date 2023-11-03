//const dotenv = require('dotenv')
//dotenv.config({ path: process.env.NODE_ENV === 'DEV' ? '.env.dev' : null })

require('express-async-errors')

const express = require('express')
const { errors } = require('celebrate')

const routes = require('./routes')
const jsonParser = require('../../shared/middlewares/json-parse')
const contentType = require('../../shared/middlewares/content-type')
const { httpContext, setContext } = require('../middlewares/http-context')
const app = express()
app.use(jsonParser)
app.use(contentType)
app.use(httpContext)
app.use(setContext)
app.use(routes)
app.use(errors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
    next();
  });

process.on('unhandledRejection', (reason, p) => {
    console.log('unhandledRejection', {
        error: { p, reason: reason.toString() }
    })
})

process.on('uncaughtException', err => {
    console.log('uncaughtException', {
        error: { error: err.message, stack: err.stack }
    })
})

module.exports = app