const httpContext = require('express-http-context')
const logger = require('../index')
const pjson = require('../../../../package.json')



const getDurationInMilliseconds = start =>{
    const NS_PER_SEC = 1e9
    const NS_TO_MS = 1e6
    const diff = process.hrtime(start)

    return (diff[0] * NS_PER_SEC + diff[1] * NS_PER_SEC ) / NS_TO_MS
}



module.exports = function responseLogger(){
    return (req, res, next) => {
        const oldWrite = res.write
        const oldEnd = res.end
        const chunks = []
        let body = null
        let durationInMilliseconds = 0
        const start = req.headers['x-response-time']

        res.write = function (chunk){
            chunks.push(chunk)
            return oldWrite.apply(res,arguments)
        }

        res.end = function (chunk){
            if (chunk) {
                chunks.push(chunk)
            }
            if (res.statusCode === 200) {
                body = Buffer.concat(chunks).toString('utf8')
            }
            oldEnd.apply(res,arguments)
            res.body = body
        }

        res.on('close', ()=>{
            if (req.originalUrl !== '/') {
                const reqHeaders = req.headers
                if (reqHeaders.apptoken) {
                    delete reqHeaders.apptoken
                }
                const reqId = httpContext.get('reqId')
                durationInMilliseconds = getDurationInMilliseconds(start)
                logger.info(`RESPONSE INFO : ${reqId}`,{
                    startTime: newDate(),
                    requestId: reqId,
                    host: req.hostname,
                    url: req.url,
                    method: req.method,
                    status: res.statusCode,
                    requestHeaders: reqHeaders,
                    responseHeaders: res.headers || {},
                    responseBody: res.body,
                    requestParams: req.params,
                    requestBody: req.body,
                    requestQuery: { query: req.query},
                    responseTime: durationInMilliseconds.toFixed(2).toLocaleString(),
                    appName: pjson.appName

                })
            }
        })
        next()
    }
}