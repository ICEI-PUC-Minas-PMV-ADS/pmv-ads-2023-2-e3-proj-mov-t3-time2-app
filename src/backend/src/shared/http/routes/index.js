const { Router } = require('express')

const pjson = require('../../../../package.json')
const userRouter = require('../../../app/routes/user-router')
const projetoRouter = require('../../../app/routes/projeto-router')
const taskRouter = require('../../../app/routes/task-router')
const userProjetoRouter = require('../../../app/routes/user-projeto-router')
const authRouter = require('../../../app/routes/auth-router')

const routes = Router()

routes.get('/api/health', (req, res) => {
    return res.json({
        name: pjson.name,
        version: pjson.version,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        UserAgent: req.get('User-Agent'),
        url: req.url,
        host: req.hostName,
        baseUrl: req.baseUrl,
        method: req.method,
    })
})

routes.get('/', (req, res) => {
    return res.json({ message: 'Olá serviço de crud para taskbook' })
})

routes.use('/v1/api/user', userRouter)
routes.use('/v1/api/projeto', projetoRouter)
routes.use('/v1/api/task', taskRouter)
routes.use('/v1/api/user_projeto', userProjetoRouter)
routes.use('/v1/api/auth', authRouter)

module.exports = routes
