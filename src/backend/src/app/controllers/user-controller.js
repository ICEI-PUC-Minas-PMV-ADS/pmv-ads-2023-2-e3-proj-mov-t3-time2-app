
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