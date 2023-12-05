CREATE database TASKBOOK;
USE taskbook;
  
CREATE TABLE USER (
  idUser INT auto_increment PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255) unique,
  senha VARCHAR(255)
  );
  
 ## SELECT * FROM taskbook.user;


## INSERT INTO user(nome,email,senha) VALUES('Marcos Vinicius','marcosvinicius@pucmail.com',md5('pucminas'));
  ## ALTER TABLE USER DROP COLUMN idade;
  ## ALTER TABLE USER DROP FOREIGN KEY idCargo;
  
  
  
  ## ALTER TABLE USER ADD foreign key (idCargo) REFERENCES CARGO(idCargo);
  ## ALTER TABLE USER ADD idCargo INT;

## Tabela Autenticação

CREATE TABLE AUTH (
  email VARCHAR(255) unique,
  senha VARCHAR(255),
  idUser INT,
  PRIMARY KEY (idUser,email), 
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  );

## select md5('pucminas');

## Tabela Projeto

CREATE TABLE PROJETO (
  idProjeto INT auto_increment PRIMARY KEY,
  nome VARCHAR(255),
  descricao VARCHAR(255),
  dataInicio DATE,
  dataConclusao DATE,
  status BOOLEAN
  );

## SELECT * FROM taskbook.projeto;
  
  CREATE TABLE USER_PROJETO (
  idProjeto INT,
  idUser INT,
  FOREIGN KEY (idUser) REFERENCES USER(idUser),
  FOREIGN KEY (idProjeto) REFERENCES PROJETO(idProjeto),
  PRIMARY KEY (idUser, idProjeto)
  );
  
 ## SELECT * FROM taskbook.user_projeto;
## INSERT INTO projeto(nome,descricao,dataInicio,dataConclusao,status) VALUES('Limpa Arquivo','Devolver documentos para os clientes',sysdate(),sysdate()+5,true);

## SELECT * FROM taskbook.projeto;



## Tabela Tarefas

CREATE TABLE TASK (
  idTask INT auto_increment PRIMARY KEY,
  descricao VARCHAR(255),
  dataInicio DATE,
  dataConclusao DATE,
  idProjeto INT,
  FOREIGN KEY (idProjeto) REFERENCES PROJETO(idProjeto),
  status BOOLEAN
  );
  
 ## SELECT * FROM taskbook.task;
  
  CREATE TABLE USER_TASK (
  idTask INT,
  idUser INT,
  FOREIGN KEY (idUser) REFERENCES USER(idUser),
  FOREIGN KEY (idTask) REFERENCES TASK(idTask),
  PRIMARY KEY (idUser, idTask)
  );
  ## SELECT * FROM taskbook.user_task;
  ## INSERT INTO task(descricao,dataInicio,dataConclusao,idProjeto,status) VALUES('Organizar documentos',sysdate(),sysdate()+5,'1',true);
  
  
  ## ALTER TABLE TASK ADD status boolean;
  ## ALTER TABLE TASK DROP COLUMN status;
  
  ## ALTER TABLE TASK ADD foreign key (idProjeto) REFERENCES PROJETO(idProjeto);
  ## ALTER TABLE TASK ADD idProjeto INT;

## Tabela Documentos

CREATE TABLE DOCUMENTO (
  extensaoDoc VARCHAR(255),
  nomeDoc VARCHAR(255),
  idUser INT,
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  );
  
  ## SELECT * FROM taskbook.user;
  
  ## ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '32751339';
  
  ## flush privileges
  
  SELECT SYSDATE();
  
  SELECT u.nome, p.nome as nomeProjeto, p.descricao, p.dataInicio, p.dataConclusao FROM taskbook.projeto p
  JOIN taskbook.user u on p.idUser=u.idUser
  WHERE u.idUser=3;


