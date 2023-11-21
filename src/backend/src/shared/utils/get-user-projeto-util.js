module.exports = {
    async queryGetUserProjeto() {
        const query = `SELECT * FROM taskbook.user_projeto`
        return query
    },
    async queryUserProjetoId(context) {
        let query = `SELECT * FROM taskbook.user_projeto`
        query += ' WHERE idProjeto = ' + context.idProjeto
        query += ' AND idUser = ' + context.idUser
        return query
    },
    async queryPostUserProjeto(context) {
        let query = `INSERT INTO taskbook.user_projeto(idUser,idProjeto)`
        query += ` VALUES ('${context.idUser}', '${context.idProjeto}')`
        return query
    },
    
}