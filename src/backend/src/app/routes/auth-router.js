const { Router } = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const expressCallback = require('../utils/express-callback')
const authController = require('../controllers/auth-controller')
const authRouter = Router()

authRouter.get('/',
    expressCallback(authController.loadGetAuthController))

userRouter.get('/idUser',
    celebrate({
        [Segments.QUERY]: {
            idUser: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        }
    }),
    expressCallback(authController.loadGetAuthIdController))

authRouter.put('/idUser',
    celebrate({
        [Segments.QUERY]: {
            idUser: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any string inside pattern'
                }),
        },
        [Segments.BODY]: {
            email: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
                senha: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
        },
    }),
    expressCallback(authController.loadPutAuthIdController))

authRouter.post('/',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param address needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            senha: Joi.string()
                .required()
                .messages({
                    'string.baseq3': 'Param name needs to be a string',
                    'any.required': 'Define any required',
                    'string.empty': 'Define any string',
                    'string.pattern': 'Define any string inside pattern'
                }),
            
        },
    }),
    expressCallback(authController.loadPostAuthController))

authRouter.delete('/idUser',
    celebrate({
        [Segments.QUERY]: {
            idUser: Joi.number()
                .required()
                .messages({
                    'number.baseq3': 'Param id needs to be a number',
                    'any.required': 'Define any required',
                    'number.empty': 'Define any number',
                    'number.pattern': 'Define any number inside pattern'
                }),
        },
    }),
    expressCallback(authController.loadDeleteAuthIdController))

module.exports = authRouter