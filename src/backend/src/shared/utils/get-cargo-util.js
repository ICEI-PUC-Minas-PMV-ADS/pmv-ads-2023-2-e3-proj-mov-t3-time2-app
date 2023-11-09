module.exports = {
    async queryGetCargo() {
        const query = `SELECT * FROM taskbook.cargo`
        return query
    },
    async queryCargoId(context) {
        let query = `SELECT * FROM taskbook.cargo`
        query += ' WHERE idCargo = ' + context.idCargo
        return query
    },
    async queryPostCargo(context) {
        let query = `INSERT INTO taskbook.cargo(nome,descricao)`
        query += ` VALUES ('${context.nome}', '${context.descricao}')`
        return query
    },
    async queryDeleteCargoId(context) {
        let query = `DELETE FROM taskbook.cargo`
        query += ` WHERE idCargo = ${context.idCargo}`
        return query
    },
    async queryPutCargoId(context) {
        let query = `UPDATE taskbook.cargo `
        const queryParam = context.query
        const bodyParam = context.body
        if (bodyParam.nome) {
            query += ` SET nome = '${bodyParam.nome}'`
        }
        if(bodyParam.descricao) {
            query += `, descricao = '${bodyParam.descricao}'`
        }
        query += ` WHERE idCargo = ${queryParam.idCargo}`
        return query
    }
}