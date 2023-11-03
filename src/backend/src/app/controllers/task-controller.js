
const taskService = require('../services/task-service')

module.exports = {
    async loadGetTaskController() {
        try {
            const tasks = await taskService.loadGetTaskService()
            lista = tasks
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
    async loadGetTaskIdController(httpRequest) {
        try {
            let lista = null
            const task = await taskService.loadGetTaskIdService(httpRequest.query)
            lista = task
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

    async loadPutTaskIdController(httpRequest) {
        try {
            await taskService.loadPutTaskIdService(httpRequest)
            return {
                statusCode: 201,
                body: { message: 'Tarefa atualizado com sucesso'}
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },

    async loadPostTaskController(httpRequest) {
        try {
            await taskService.loadPostTaskService(httpRequest.body)
            return {
                statusCode: 201,
                body: { message: 'Tarefa criado com sucesso' }
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
    async loadDeleteTaskIdController(httpRequest) {
        try {
            await taskService.loadDeleteTaskIdService(httpRequest.query)
            return {
                statusCode: 201,
                body: 'Tarefa deletado com sucesso'
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: { message: error }

            }
        }
    },
}