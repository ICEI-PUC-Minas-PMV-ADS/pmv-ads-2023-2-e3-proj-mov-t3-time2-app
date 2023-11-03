const MySql = require('mysql')
const config = require('../configs/mysql-config')

class MySqlHelper {
    constructor() {
        this.config = config
    }
    async createConnection() {
        const connection = await MySql.createConnection( {
            host: "localhost",
            password: "32751339",
            user: "root",
            database: "taskbook"       
        })
        return connection
    }
    async initialize() {
        this.client = await this.createConnection()
        return this.client
    }

    async close(connected) {
        connected.connection.end()
    }

    // async simpleExecute(execute) {
    //     try {
    //         return new Promise(async (resolve, reject) => {
    //             const conn = await this.initialize()
    //             await conn.connect()
    //             conn.query(
    //                 execute,
    //               (err, result) => {
    //                 console.log(result)[0]
    //                 return err ? reject(err) : resolve(result[0].hexcode);
    //               }
    //             )
    //           })
    //         } catch (error) {
    //         console.log(error)
    //     }
    // }
    async simpleExecute(execute) {
        return new Promise(async (resolve, reject) => {
            const conn = await this.initialize()
            await conn.connect()
            conn.query(
                execute,
                function (err, rows) {
                    if (err) {
                        console.log(err)
                        reject(err.sqlMessage)
                    }else{
                        resolve(rows);
                    }
                }
            )
        }
        )
    }
}


module.exports = new MySqlHelper()

