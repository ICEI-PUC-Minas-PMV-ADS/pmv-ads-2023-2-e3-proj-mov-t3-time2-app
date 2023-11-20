
const userProjetoService = require('../services/user-projeto-service')

module.exports = {
    async loadGetUserProjetoController() {
        try {
            const userProjeto = await userProjetoService.loadGetUserProjetoService()
            lista = userProjeto
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
    async loadGetUserProjetoIdController(httpRequest) {
        try {
            let lista = null
            const userProjeto = await userProjetoService.loadGetUserProjetoIdService(httpRequest.query)
            lista = userProjeto
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


    async loadPostUserProjetoController(httpRequest) {
        try {
            await userProjetoService.loadPostUserProjetoService(httpRequest.body)
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
    
}