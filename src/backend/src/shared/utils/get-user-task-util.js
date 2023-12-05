module.exports = {
    async queryGetUserTask() {
        const query = `SELECT * FROM taskbook.user_task`
        return query
    },
    async queryUserTaskId(context) {
        let query = `SELECT * FROM taskbook.user_task`
        query += ' WHERE idTask = ' + context.idTask
        query += ' AND idUser = ' + context.idUser
        return query
    },
    async queryPostUserTask(context) {
        let query = `INSERT INTO taskbook.user_task(idUser,idTask)`
        query += ` VALUES ('${context.idUser}', '${context.idTask}')`
        return query
    },
    
}