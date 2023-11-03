const { v4: uuidv4 } = require('uuid')

const httContextHelper = require('../helpers/http-context-helper')

const httpContext = httContextHelper.contextMiddleware

const setContext = (req, res, next) => {
    httContextHelper.setContext('reqId', uuidv4())
    next()
}

module.exports = { httpContext, setContext }