module.exports = {
    async queryGetUser() {
        const query = `SELECT * FROM taskbook.user`
        return query
    },
    async queryUserId(context) {
        let query = `SELECT * FROM taskbook.user`
        query += ' WHERE idUser = ' + context.idUser
        return query
    },
    async queryPostUser(context) {
        let query = `INSERT INTO taskbook.user(nome,email,senha,idCargo)`
        query += ` VALUES ('${context.nome}', '${context.email}','${context.senha}','${context.idCargo}')`
        return query
    },
    async queryDeleteUserId(context) {
        let query = `DELETE FROM taskbook.user`
        query += ` WHERE idUser = ${context.idUser}`
        return query
    },
    async queryPutUserId(context) {
        let query = `UPDATE taskbook.user `
        const queryParam = context.query
        const bodyParam = context.body
        if (bodyParam.nome) {
            query += ` SET nome = '${bodyParam.nome}'`
        }
        if(bodyParam.email) {
            query += `, email = '${bodyParam.email}'`
        }if(bodyParam.senha) {
            query += `, senha = '${bodyParam.senha}'`
        }if(bodyParam.idCargo) {
            query += `, idCargo = '${bodyParam.idCargo}'`
        }
        query += ` WHERE idUser = ${queryParam.idUser}`
        return query
    }
}