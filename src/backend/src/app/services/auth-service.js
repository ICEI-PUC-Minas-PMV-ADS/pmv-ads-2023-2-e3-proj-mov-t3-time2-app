const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysAuths = require('../../shared/utils/get-auth-util')

module.exports = {
    
    async loadPostAuthUserService(context) {
        try {
            let query = null
            query = await querysAuths.queryAuth(context)
            const getAuth = await mysqlHelper.simpleExecute(query)
            return getAuth
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
    
}