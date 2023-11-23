
const authService = require('../services/auth-service')

module.exports = {
    async loadPostAuthUserController(httpRequest) {
        try {
            const auths = await authService.loadPostAuthUserService(httpRequest.body)
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
    

    async loadPostAuthController(httpRequest) {
        try {
            await authService.loadPostAuthService(httpRequest.body)
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
}