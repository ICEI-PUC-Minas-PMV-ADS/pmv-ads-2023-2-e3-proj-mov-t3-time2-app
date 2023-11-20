const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysUserProjeto = require('../../shared/utils/get-user-projeto-util')

module.exports = {
    async loadGetUserProjetoService() {
        try {
            const query = await querysUserProjeto.queryGetUserProjeto()
            const getUserProjeto = await mysqlHelper.simpleExecute(query)
            return getUserProjeto
        } catch (error) {
            throw error
        }
    },
    async loadGetUserProjetoIdService(context) {
        try {
            let query = null
            query = await querysUserProjeto.queryUserProjetoId(context)
            const getUserProjetoId = await mysqlHelper.simpleExecute(query)
            return getUserProjetoId
        } catch (error) {
            throw error
        }
    },
    
    async loadPostUserProjetoService(context) {
        try {
            let query = null
            query = await querysUserProjeto.queryPostUserProjeto(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    
}