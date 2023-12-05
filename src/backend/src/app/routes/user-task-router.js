const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const userTaskController = require('../controllers/user-task-controller')
const userTaskRouter = Router()

userTaskRouter.get('/',
    expressCallback(userTaskController.loadGetUserTaskController))

userTaskRouter.get('/ids',
celebrate({
    [Segments.QUERY]: Joi.object().keys({
        idUser: Joi.number()
            .optional()
            .messages({
                'number.base': 'Param idUser needs to be a number',
                'number.empty': 'Define any number',
                'number.pattern': 'Define any number inside pattern'
            }),
        idTask: Joi.number()
            .optional()
            .messages({
                'number.base': 'Param idProjeto needs to be a number',
                'number.empty': 'Define any number',
                'number.pattern': 'Define any number inside pattern'
            }),
    }).or('idUser', 'idTask') // Pelo menos um dos campos é obrigatório
}),
    expressCallback(userTaskController.loadGetUserTaskIdController))


userTaskRouter.post('/',
celebrate({
    [Segments.BODY]: Joi.object().keys({
        idUser: Joi.number()
            .optional()
            .messages({
                'number.base': 'Param idUser needs to be a number',
                'number.empty': 'Define any number',
                'number.pattern': 'Define any number inside pattern'
            }),
        idTask: Joi.number()
            .optional()
            .messages({
                'number.base': 'Param idProjeto needs to be a number',
                'number.empty': 'Define any number',
                'number.pattern': 'Define any number inside pattern'
            }),
    }).or('idUser', 'idTask') // Pelo menos um dos campos é obrigatório
}),
    expressCallback(userTaskController.loadPostUserTaskController))


module.exports = userTaskRouter