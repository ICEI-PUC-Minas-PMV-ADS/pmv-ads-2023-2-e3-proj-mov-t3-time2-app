const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysUserTask = require('../../shared/utils/get-user-task-util')

module.exports = {
    async loadGetUserTaskService() {
        try {
            const query = await querysUserTask.queryGetUserTask()
            const getUserTask = await mysqlHelper.simpleExecute(query)
            return getUserTask
        } catch (error) {
            throw error
        }
    },
    async loadGetUserTaskIdService(context) {
        try {
            let query = null
            query = await querysUserTask.queryUserTaskId(context)
            const getUserTaskId = await mysqlHelper.simpleExecute(query)
            return getUserTaskId
        } catch (error) {
            throw error
        }
    },
    
    async loadPostUserTaskService(context) {
        try {
            let query = null
            query = await querysUserTask.queryPostUserTask(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    
}