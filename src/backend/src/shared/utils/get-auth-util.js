module.exports = {
    async queryGetAuth() {
        const query = `SELECT * FROM taskbook.auth`
        return query
    },
    async queryAuth(context) {
        let query = `SELECT * FROM taskbook.auth`
        query += ` WHERE idUser = '${context.idUser}' `
        query += `  AND  email = '${context.email}' `
        return query
    },
    async queryPostAuth(context) {
        let query = `INSERT INTO taskbook.auth(idUser,email,senha)`
        query += ` VALUES ('${context.idUser}','${context.email}',md5('${context.senha}'))`
        return query
    },
   
}