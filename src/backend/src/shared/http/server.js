//const dotenv = require('dotenv')
//dotenv.config({ path: process.env.NODE_ENV === 'dev' ? '.env.dev' : null })
const app = require('./app')
const mysqlHelper = require('../helpers/mysql-helper')
const port = 3000

const mysql = mysqlHelper
    .initialize()
    .then(() => {
        console.log('Conectado ao Mysql')
    }).catch(error => {
        console.log('Error', error.message)
    })


Promise.all([mysql]).then(() => {
    app.listen(port, async () => {
        console.log(`Servidor rodando na porta ${port}`)
    })
})
