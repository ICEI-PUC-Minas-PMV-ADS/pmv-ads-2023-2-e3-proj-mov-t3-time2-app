const httpContext = require('express-http-context')
const logger = require('../index')
const pjson = require('../../../../package.json')



const requestLogger = (req, res, next) => {
    if (req.originalUrl !== '/') {
        const reqHeaders = req.headers
        if (reqHeaders.apptoken) {
            delete reqHeaders.apptoken
        }

        const reqId = httpContext.get('reqId')
        const start = process.hrtime()
        req.headers = ['x-response-time'] = start

        logger.info(`REQUEST INFO : ${reqId}`, [
            {
                startTime: newDate(),
                requestId: reqId,
                host: req.hostname,
                url: req.url,
                method: req.method,
                status: res.statusCode,
                requestHeaders: reqHeaders,
                requestParams: req.params,
                requestBody: req.body,
                requestQuery: { query: req.query },
                appName: pjson.appName

            },
        ])
   }
   next()
}


module.exports = { requestLogger }