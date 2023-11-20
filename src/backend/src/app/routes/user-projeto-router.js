const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const userProjetoController = require('../controllers/user-projeto-controller')
const userProjetoRouter = Router()

userProjetoRouter.get('/',
    expressCallback(userProjetoController.loadGetUserProjetoController))

userProjetoRouter.get('/ids',
celebrate({
    [Segments.QUERY]: Joi.object().keys({
        idUser: Joi.number()
            .optional()
            .messages({
                'number.base': 'Param idUser needs to be a number',
                'number.empty': 'Define any number',
                'number.pattern': 'Define any number inside pattern'
            }),
        idProjeto: Joi.number()
            .optional()
            .messages({
                'number.base': 'Param idProjeto needs to be a number',
                'number.empty': 'Define any number',
                'number.pattern': 'Define any number inside pattern'
            }),
    }).or('idUser', 'idProjeto') // Pelo menos um dos campos é obrigatório
}),
    expressCallback(userProjetoController.loadGetUserProjetoIdController))


userProjetoRouter.post('/',
celebrate({
    [Segments.BODY]: Joi.object().keys({
        idUser: Joi.number()
            .optional()
            .messages({
                'number.base': 'Param idUser needs to be a number',
                'number.empty': 'Define any number',
                'number.pattern': 'Define any number inside pattern'
            }),
        idProjeto: Joi.number()
            .optional()
            .messages({
                'number.base': 'Param idProjeto needs to be a number',
                'number.empty': 'Define any number',
                'number.pattern': 'Define any number inside pattern'
            }),
    }).or('idUser', 'idProjeto') // Pelo menos um dos campos é obrigatório
}),
    expressCallback(userProjetoController.loadPostUserProjetoController))


module.exports = userProjetoRouter