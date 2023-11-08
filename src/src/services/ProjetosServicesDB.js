import Database from "./DbServices";

const DB_EXEC = Database.getConnection();

export const getProjetos = async () => {
    let results = await DB_EXEC(`select * from projetos`);
    //console.log(results)
    return results.rows._array
}

export const insertProjetos = async (param) => {
    let results = await DB_EXEC(`insert into projetos(nome, descricao, colaborador, datafim, datainicio, tarefa) values(?,?,?,?,?,?)`, [param.nome, param. descricao, param.colaborador, param.datafim, param.datainicio, param.tarefa]);
    //console.log(results)
    return results.rowsAffected;
}

export const updateProjetos = async (param) => {
    let results = await DB_EXEC(`update projetos set nome=?, descricao=?, colaborador=?, datafim=?, datainicio=?, tarefa=?
    where id=?`, [param.nome, param.descricao, param.colaborador, param.datafim, param.datainicio, param.tarefa, param.id]);
    //console.log(results);
    return results.rowsAffected;
  }
  
  export const deleteProjetos = async (id) => {
    let results = await DB_EXEC(`delete from projetos where id=?`, [id]);
    //console.log(results);
    return results.rowsAffected;
  }