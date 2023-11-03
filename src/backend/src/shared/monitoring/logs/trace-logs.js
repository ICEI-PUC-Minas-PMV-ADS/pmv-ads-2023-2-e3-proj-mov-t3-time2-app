const httContext = require('express-http-context')
const logger = require('../index')


const tracelogs = (
    message,
    {
        body,
        headers,
        query,
        statusCode,
        destination,
        requestId,
        responseTime,
        origin,
    },
) => {
    const reqId = httContext.get('reqIds')

    logger.info(`MONITORING STEP: ${message}`,
    [
        {
            requestId: requestId || reqId,
            destinationInfo: destination || null,
            bodyInfo: body || null,
            headersInfo: headers || null,
            queryInfo: query || null,
            statusInfo: statusCode || null,
            responseTime: responseTime || null,
            originInfo: origin || '',
        }
    ])
}

module.exports = { tracelogs }