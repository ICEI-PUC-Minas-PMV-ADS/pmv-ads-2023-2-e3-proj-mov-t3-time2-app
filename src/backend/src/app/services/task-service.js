const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysTasks = require('../../shared/utils/get-task-util')

module.exports = {
    async loadGetTaskService() {
        try {
            const query = await querysTasks.queryGetTask()
            const getTasks = await mysqlHelper.simpleExecute(query)
            return getTasks
        } catch (error) {
            throw error
        }
    },
    async loadGetTaskIdService(context) {
        try {
            let query = null
            query = await querysTasks.queryTaskId(context)
            const getTaskId = await mysqlHelper.simpleExecute(query)
            return getTaskId
        } catch (error) {
            throw error
        }
    },
    async loadPutTaskIdService(context) {
        try {
            let query = null
            query = await querysTasks.queryPutTaskId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadPostTaskService(context) {
        try {
            let query = null
            query = await querysTasks.queryPostTask(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadDeleteTaskIdService(context) {
        try {
            let query = null
            query = await querysTasks.queryDeleteTaskId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
}