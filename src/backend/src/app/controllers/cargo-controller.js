
const cargoService = require('../services/cargo-service')

module.exports = {
    async loadGetCargoController() {
        try {
            const cargos = await cargoService.loadGetCargoService()
            lista = cargos
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
    async loadGetCargoIdController(httpRequest) {
        try {
            let lista = null
            const cargo = await cargoService.loadGetCargoIdService(httpRequest.query)
            lista = cargo
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

    async loadPutCargoIdController(httpRequest) {
        try {
            await cargoService.loadPutCargoIdService(httpRequest)
            return {
                statusCode: 201,
                body: { message: 'cargo atualizado com sucesso'}
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },

    async loadPostCargoController(httpRequest) {
        try {
            await cargoService.loadPostCargoService(httpRequest.body)
            return {
                statusCode: 201,
                body: { message: 'Cargo criado com sucesso' }
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
    async loadDeleteCargoIdController(httpRequest) {
        try {
            await cargoService.loadDeleteCargoIdService(httpRequest.query)
            return {
                statusCode: 201,
                body: 'cargo deletado com sucesso'
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
}