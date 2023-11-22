
const authService = require('../services/auth-service')

module.exports = {
    async loadGetAuthController() {
        try {
            const auths = await authService.loadGetAuthService()
            lista = auths
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
    async loadGetAuthIdController(httpRequest) {
        try {
            let lista = null
            const auth = await userService.loadGetAuthIdService(httpRequest.query)
            lista = auth
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

    async loadPutAuthIdController(httpRequest) {
        try {
            await userService.loadPutAuthIdService(httpRequest)
            return {
                statusCode: 201,
                body: { message: 'autenticação atualizado com sucesso'}
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },

    async loadPostAuthController(httpRequest) {
        try {
            await userService.loadPostAuthService(httpRequest.body)
            return {
                statusCode: 201,
                body: { message: 'autenticação criado com sucesso' }
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
    async loadDeleteAuthIdController(httpRequest) {
        try {
            await authService.loadDeleteAuthIdService(httpRequest.query)
            return {
                statusCode: 201,
                body: 'autenticação deletada com sucesso'
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
}