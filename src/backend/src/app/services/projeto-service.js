const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysProjetos = require('../../shared/utils/get-projeto-util')

module.exports = {
    async loadGetProjetoService() {
        try {
            const query = await querysProjetos.queryGetProjeto()
            const getProjetos = await mysqlHelper.simpleExecute(query)
            return getProjetos
        } catch (error) {
            throw error
        }
    },
    async loadGetProjetoIdService(context) {
        try {
            let query = null
            query = await querysProjetos.queryProjetoId(context)
            const getProjetoId = await mysqlHelper.simpleExecute(query)
            return getProjetoId
        } catch (error) {
            throw error
        }
    },
    async loadPutProjetoIdService(context) {
        try {
            let query = null
            query = await querysProjetos.queryPutProjetoId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadPostProjetoService(context) {
        try {
            let query = null
            query = await querysProjetos.queryPostProjeto(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadDeleteProjetoIdService(context) {
        try {
            let query = null
            query = await querysProjetos.queryDeleteProjetoId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
}