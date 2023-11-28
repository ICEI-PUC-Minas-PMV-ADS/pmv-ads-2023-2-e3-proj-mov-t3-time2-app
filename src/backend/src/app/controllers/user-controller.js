
const userService = require('../services/user-service')

module.exports = {
    async loadGetUserController() {
        try {
            const users = await userService.loadGetUserService()
            lista = users
            return {
                statusCode: 200,
                body: { lista }
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
    async loadGetUserIdController(httpRequest) {
        try {
            let lista = null
            const user = await userService.loadGetUserIdService(httpRequest.query)
            lista = user
            return {
                statusCode: 200,
                body: { lista }
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },

    async loadPutUserIdController(httpRequest) {
        try {
            await userService.loadPutUserIdService(httpRequest)
            return {
                statusCode: 201,
                body: { message: 'user atualizado com sucesso'}
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },

    async loadPostUserEmailController(httpRequest) {
        try {
            const users = await userService.loadPostUserEmailService(httpRequest.body)
            let lista = users
            console.log(users.length)
            return {
                statusCode: users.length > 0 ? 200 : 404,
                body: { message: users.length > 0 ? 'Retornando usuario com sucesso' : 'Usuario não existente na base de dados',
            user: lista }
            } 
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },

    async loadPostUserController(httpRequest) {
        try {
            await userService.loadPostUserService(httpRequest.body)
            return {
                statusCode: 201,
                body: { message: 'User criado com sucesso' }
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
    async loadDeleteUserIdController(httpRequest) {
        try {
            await userService.loadDeleteUserIdService(httpRequest.query)
            return {
                statusCode: 201,
                body: 'user deletado com sucesso'
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
}