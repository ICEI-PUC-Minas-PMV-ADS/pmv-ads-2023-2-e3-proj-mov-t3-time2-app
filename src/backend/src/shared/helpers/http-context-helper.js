const httpContext = require('express-http-context')

const contextMiddleware = httpContext.middleware

module.exports = {
    contextMiddleware,
    setContext(key, value) {
        httpContext.set(key, value)
    },
    getContext(key) {
        return httpContext.get(key)
    }
}