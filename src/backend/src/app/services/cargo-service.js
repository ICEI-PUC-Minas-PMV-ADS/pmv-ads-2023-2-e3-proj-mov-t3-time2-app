const mysqlHelper = require('../../shared/helpers/mysql-helper')
const querysCargos = require('../../shared/utils/get-cargo-util')

module.exports = {
    async loadGetCargoService() {
        try {
            const query = await querysCargos.queryGetCargo()
            const getCargos = await mysqlHelper.simpleExecute(query)
            return getCargos
        } catch (error) {
            throw error
        }
    },
    async loadGetCargoIdService(context) {
        try {
            let query = null
            query = await querysCargos.queryCargoId(context)
            const getCargoId = await mysqlHelper.simpleExecute(query)
            return getCargoId
        } catch (error) {
            throw error
        }
    },
    async loadPutCargoIdService(context) {
        try {
            let query = null
            query = await querysCargos.queryPutCargoId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadPostCargoService(context) {
        try {
            let query = null
            query = await querysCargos.queryPostCargo(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
    async loadDeleteCargoIdService(context) {
        try {
            let query = null
            query = await querysCargos.queryDeleteCargoId(context)
            await mysqlHelper.simpleExecute(query)
        } catch (error) {
            throw error
        }
    },
}