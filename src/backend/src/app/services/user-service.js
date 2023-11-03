const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysUsers = require('../../shared/utils/get-user-util')

module.exports = {
    async loadGetUserService() {
        try {
            const query = await querysUsers.queryGetUser()
            const getUsers = await mysqlHelper.simpleExecute(query)
            return getUsers
        } catch (error) {
            throw error
        }
    },
    async loadGetUserIdService(context) {
        try {
            let query = null
            query = await querysUsers.queryUserId(context)
            const getUserId = await mysqlHelper.simpleExecute(query)
            return getUserId
        } catch (error) {
            throw error
        }
    },
    async loadPutUserIdService(context) {
        try {
            let query = null
            query = await querysUsers.queryPutUserId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadPostUserService(context) {
        try {
            let query = null
            query = await querysUsers.queryPostUser(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadDeleteUserIdService(context) {
        try {
            let query = null
            query = await querysUsers.queryDeleteUserId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
}