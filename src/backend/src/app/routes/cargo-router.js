const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const cargoController = require('../controllers/cargo-controller')
const cargoRouter = Router()

cargoRouter.get('/',
    expressCallback(cargoController.loadGetCargoController))

cargoRouter.get('/idCargo',
    celebrate({
        [Segments.QUERY]: {
            idCargo: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        }
    }),
    expressCallback(cargoController.loadGetCargoIdController))

cargoRouter.put('/idCargo',
    celebrate({
        [Segments.QUERY]: {
            idCargo: Joi.number()
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
        },
    }),
    expressCallback(cargoController.loadPutCargoIdController))

cargoRouter.post('/',
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
        },
    }),
    expressCallback(cargoController.loadPostCargoController))

cargoRouter.delete('/idCargo',
    celebrate({
        [Segments.QUERY]: {
            idCargo: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        },
    }),
    expressCallback(cargoController.loadDeleteCargoIdController))

module.exports = cargoRouter