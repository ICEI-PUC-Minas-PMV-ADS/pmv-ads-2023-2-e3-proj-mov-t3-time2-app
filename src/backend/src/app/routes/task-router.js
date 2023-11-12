const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const taskController = require('../controllers/task-controller')
const taskRouter = Router()

taskRouter.get('/',
    expressCallback(taskController.loadGetTaskController))

taskRouter.get('/idTask',
    celebrate({
        [Segments.QUERY]: {
            idTask: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        }
    }),
    expressCallback(taskController.loadGetTaskIdController))

    taskRouter.put('/idTask',
    celebrate({
        [Segments.QUERY]: {
            idTask: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any string inside pattern'
                }),
        },
        [Segments.BODY]: {
            descricao: Joi.string()
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
            idProjeto: Joi.number()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
        },
    }),
    expressCallback(taskController.loadPutTaskIdController))

taskRouter.post('/',
    celebrate({
        [Segments.BODY]: {
            descricao: Joi.string()
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
            idProjeto: Joi.number()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            
        },
    }),
    expressCallback(taskController.loadPostTaskController))

taskRouter.delete('/idTask',
    celebrate({
        [Segments.QUERY]: {
            idTask: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        },
    }),
    expressCallback(taskController.loadDeleteTaskIdController))

module.exports = taskRouter