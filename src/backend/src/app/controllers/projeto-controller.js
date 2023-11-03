const projetoService = require('../services/projeto-service')

module.exports = {
    async loadGetProjetoController() {
        try {
            const projetos = await projetoService.loadGetProjetoService()
            lista = projetos
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
    async loadGetProjetoIdController(httpRequest) {
        try {
            let lista = null
            const user = await projetoService.loadGetProjetoIdService(httpRequest.query)
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

    async loadPutProjetoIdController(httpRequest) {
        try {
            await projetoService.loadPutProjetoIdService(httpRequest)
            return {
                statusCode: 201,
                body: { message: 'projeto atualizado com sucesso'}
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },

    async loadPostProjetoController(httpRequest) {
        try {
            await projetoService.loadPostProjetoService(httpRequest.body)
            return {
                statusCode: 201,
                body: { message: 'Projeto criado com sucesso' }
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
    async loadDeleteProjetoIdController(httpRequest) {
        try {
            await projetoService.loadDeleteProjetoIdService(httpRequest.query)
            return {
                statusCode: 201,
                body: 'Projeto deletado com sucesso'
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
}