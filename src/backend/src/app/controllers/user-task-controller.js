
const userTaskService = require('../services/user-task-service')

module.exports = {
    async loadGetUserTaskController() {
        try {
            const userTask = await userTaskService.loadGetUserTaskService()
            lista = userTask
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
    async loadGetUserTaskIdController(httpRequest) {
        try {
            let lista = null
            const userTask = await userTaskService.loadGetUserTaskIdService(httpRequest.query)
            lista = userTask
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


    async loadPostUserTaskController(httpRequest) {
        try {
            await userTaskService.loadPostUserTaskService(httpRequest.body)
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