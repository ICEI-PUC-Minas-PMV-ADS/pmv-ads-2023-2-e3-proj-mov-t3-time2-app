const httpContext = require('express-http-context')
const logger = require('../index')


const loggerError = (
    message,
    { erros, body, headers, query, statysCode, destination, requestId, origin },
) => {
    const reqId = httpContext.get('reqId')

    logger.error(`ERROR ALERT: ${message}`, [
        {
            errorInfo: error || null,
            requestId: requestId || reqId,
            destinationInfo: destination || null,
            bodyInfo: body || null,
            headersInfo: headers || null,
            queryInfo: query || null,
            statusInfo: statusCode || null,
            originInfo: origin || null,
        }
    ])
}

module.exports = { loggerError }