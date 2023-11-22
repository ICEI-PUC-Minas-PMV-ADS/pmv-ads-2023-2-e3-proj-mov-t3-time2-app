const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysAuths = require('../../shared/utils/get-auth-util')

module.exports = {
    async loadGetAuthService() {
        try {
            const query = await querysAuths.queryGetAuth()
            const getAuths = await mysqlHelper.simpleExecute(query)
            return getAuths
        } catch (error) {
            throw error
        }
    },
    async loadGetAuthIdService(context) {
        try {
            let query = null
            query = await querysAuths.queryAuthId(context)
            const getAuthId = await mysqlHelper.simpleExecute(query)
            return getAuthId
        } catch (error) {
            throw error
        }
    },
    async loadPutAuthIdService(context) {
        try {
            let query = null
            query = await querysAuths.queryPutAuthId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadPostAuthService(context) {
        try {
            let query = null
            query = await querysAuths.queryPostAuth(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadDeleteAuthIdService(context) {
        try {
            let query = null
            query = await querysAuths.queryDeleteAuthId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
}