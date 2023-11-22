module.exports = {
    async queryGetAuth() {
        const query = `SELECT * FROM taskbook.auth`
        return query
    },
    async queryAuthId(context) {
        let query = `SELECT * FROM taskbook.auth`
        query += ' WHERE idUser = ' + context.idUser
        return query
    },
    async queryPostAuth(context) {
        let query = `INSERT INTO taskbook.auth(email,senha)`
        query += ` VALUES ('${context.email}','${context.senha}')`
        return query
    },
    async queryDeleteAuthId(context) {
        let query = `DELETE FROM taskbook.auth`
        query += ` WHERE idUser = ${context.idUser}`
        return query
    },
    async queryPutAuthId(context) {
        let query = `UPDATE taskbook.auth `
        const queryParam = context.query
        const bodyParam = context.body
        if(bodyParam.email) {
            query += `, email = '${bodyParam.email}'`
        }if(bodyParam.senha) {
            query += `, senha = '${bodyParam.senha}'`
        }
        query += ` WHERE idUser = ${queryParam.idUser}`
        return query
    }
}