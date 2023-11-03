import * as SQLite from 'expo-sqlite';

const Database = {

    getConnection: () => {
        const db = SQLite.openDatabase('taskbook.db');

        db.transaction((tx) => {
            tx.executeSql('create table if not exists projetos(id integer primary key not null, nome text not null, descricao text not null, colaborador text not null, datainicio text not null, datafim text not null, tarefa text not null);')
        });

        const ExecuteQuery = (sql, params = []) =>
            new Promise((resolve, reject) => {
                db.transaction((trans) => {
                    trans.executeSql(
                        sql,
                        params,
                        (trans, results) => {
                            resolve(results);
                        },
                        (error) => {
                            reject(error);
                        }
                    );
                });
            })

        return ExecuteQuery
    }
}


export default Database