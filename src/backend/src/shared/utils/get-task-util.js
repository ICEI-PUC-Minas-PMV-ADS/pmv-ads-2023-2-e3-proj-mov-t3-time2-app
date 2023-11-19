const moment = require('moment')

module.exports = {
    async queryGetTask() {
        const query = `SELECT * FROM taskbook.task`
        return query
    },
    async queryTaskId(context) {
        let query = `SELECT * FROM taskbook.task`
        query += ' WHERE idTask = ' + context.idTask
        return query
    },
    async queryPostTask(context) {
        let dataIni = moment(context.dataInicio)
        let dataConc = moment(context.dataConclusao)
        dataIni = dataIni.format('YYYY-MM-DD HH:mm:ss')
        dataConc = dataConc.format('YYYY-MM-DD HH:mm:ss')
        let query = `INSERT INTO taskbook.task(descricao,dataInicio,dataConclusao,idUser,status)`
        query += ` VALUES ('${context.descricao}','${dataIni}', '${dataConc}','${context.idUser}','${context.status}')`
        return query
    },
    async queryDeleteTaskId(context) {
        let query = `DELETE FROM taskbook.task`
        query += ` WHERE idTask = ${context.idTask}`
        return query
    },
    async queryPutTaskId(context) {
        let query = `UPDATE taskbook.task `
        const queryParam = context.query
        const bodyParam = context.body
        if (bodyParam.descricao) {
            query += ` SET descricao = '${bodyParam.descricao}'`
        }
        if(bodyParam.dataInicio) {
            let dataIni = moment(bodyParam.dataInicial)  
            dataIni = dataIni.format('YYYY-MM-DD HH:mm:ss')     
            query += `, dataInicio = '${dataIni}'`
        }if(bodyParam.dataConclusao) {
            let dataConc = moment(bodyParam.dataConclusao)
            dataConc = dataConc.format('YYYY-MM-DD HH:mm:ss')
            query += `, dataConclusao = '${dataConc}'`
        }if(bodyParam.idUser) {
            query += `, idUser = '${bodyParam.idUser}'`
        }if(bodyParam.status) {
            query += `, status = '${bodyParam.status}'`
        }
        query += ` WHERE idTask = ${queryParam.idTask}`
        return query
    }
}