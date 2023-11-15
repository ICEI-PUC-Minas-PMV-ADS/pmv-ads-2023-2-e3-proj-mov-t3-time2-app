const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const projetoController = require('../controllers/projeto-controller')
const projetoRouter = Router()

projetoRouter.get('/',
    expressCallback(projetoController.loadGetProjetoController))

projetoRouter.get('/idProjeto',
    celebrate({
        [Segments.QUERY]: {
            idProjeto: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        }
    }),
    expressCallback(projetoController.loadGetProjetoIdController))

projetoRouter.put('/idProjeto',
    celebrate({
        [Segments.QUERY]: {
            idProjeto: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any string inside pattern'
                }),
        },
        [Segments.BODY]: {
            nome: Joi.string()
                .optional()
                .messages({
                    'string.baseq3': 'Param name needs to be a string',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            descricao: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
                dataInicio: Joi.date()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
                dataConclusao: Joi.date()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
                idUser: Joi.number()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
                status: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                })
        },
    }),
    expressCallback(projetoController.loadPutProjetoIdController))

projetoRouter.post('/',
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param name needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            descricao: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            dataInicio: Joi.date()
                .required()
                .messages({
                    'string.baseq3': 'Param name needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            dataConclusao: Joi.date()
                .required()
                .messages({
                    'string.baseq3': 'Param name needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            idUser: Joi.number()
                .required()
                .messages({
                    'string.baseq3': 'Param name needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            status: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param name needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            
        },
    }),
    expressCallback(projetoController.loadPostProjetoController))

projetoRouter.delete('/idProjeto',
    celebrate({
        [Segments.QUERY]: {
            idProjeto: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        },
    }),
    expressCallback(projetoController.loadDeleteProjetoIdController))

module.exports = projetoRouter