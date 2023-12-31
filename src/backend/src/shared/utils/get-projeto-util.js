const moment = require('moment')

module.exports = {
    async queryGetProjeto() {
        const query = `SELECT * FROM taskbook.projeto`
        return query
    },
    async queryProjetoId(context) {
        let query = `SELECT * FROM taskbook.projeto`
        query += ' WHERE idProjeto = ' + context.idProjeto
        return query
    },

    async queryProjetoNome(context) {
        let query = `SELECT * FROM taskbook.projeto`
        query += ' WHERE nome = ' + context.nome
        return query
    },

    async queryPostProjeto(context) {
        let dataIni = moment(context.dataInicio)
        let dataConc = moment(context.dataConclusao)
        dataIni = dataIni.format('YYYY-MM-DD HH:mm:ss')
        dataConc = dataConc.format('YYYY-MM-DD HH:mm:ss')
        let query = `INSERT INTO taskbook.projeto(nome,descricao,dataInicio,dataConclusao, status)`
        query += ` VALUES ('${context.nome}', '${context.descricao}','${dataIni}', '${dataConc}', ${context.status})`
        return query
    },
    async queryDeleteProjetoId(context) {
        let query = `DELETE FROM taskbook.projeto`
        query += ` WHERE idProjeto = ${context.idProjeto}`
        return query
    },
    async queryPutProjetoId(context) {
        let query = `UPDATE taskbook.projeto `
        const queryParam = context.query
        const bodyParam = context.body
        if (bodyParam.nome) {
            query += ` SET nome = '${bodyParam.nome}'`
        }
        if(bodyParam.descricao) {
            query += `, descricao = '${bodyParam.descricao}'`
        }if(bodyParam.dataInicio) {
            let dataIni = moment(bodyParam.dataInicial)  
            dataIni = dataIni.format('YYYY-MM-DD HH:mm:ss')     
            query += `, dataInicio = '${dataIni}'`
        }if(bodyParam.dataConclusao) {
            let dataConc = moment(bodyParam.dataConclusao)
            dataConc = dataConc.format('YYYY-MM-DD HH:mm:ss')
            query += `, dataConclusao = '${dataConc}'`
        }if(bodyParam.status) {
            query += `, status = ${bodyParam.status}`
        }
        query += ` WHERE idProjeto = ${queryParam.idProjeto}`
        return query
    }
}