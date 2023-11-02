const winston = require('winston')

const getConsoleTransports = ()=> 
new winston.transports.Console({
    name:'Console',
    level: 'error',
    format: winston.format.json({ space: 1 }),
    silent: 'production'
})

module.exports = getConsoleTransports