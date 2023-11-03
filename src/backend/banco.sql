CREATE database TASKBOOK;
USE taskbook;
CREATE TABLE USER (
  idUser INT auto_increment PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255),
  senha VARCHAR(255),
  idade INT(100),
  cargo VARCHAR(255)
  );

## Tabela Autenticação

CREATE TABLE AUTH (
  email VARCHAR(255),
  senha VARCHAR(255),
  idUser INT,
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  );

## Tabela Projeto

CREATE TABLE PROJETO (
  idProjeto INT auto_increment PRIMARY KEY,
  nome VARCHAR(255),
  descricao VARCHAR(255),
  dataInicio DATE,
  dataConclusao DATE,
  task VARCHAR(255),
  idUser INT,
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  );

## Tabela Tarefas

CREATE TABLE TASK (
  idTask INT auto_increment PRIMARY KEY,
  descricao VARCHAR(255),
  status VARCHAR(255),
  dataInicio DATE,
  dataConclusao DATE,
  responsavel VARCHAR(255),
  idUser INT,
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  );

## Tabela Documentos

CREATE TABLE DOCUMENTO (
  extensaoDoc VARCHAR(255),
  nomeDoc VARCHAR(255),
  idUser INT,
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  );
  
  INSERT INTO user(nome,email,senha,idade,cargo) VALUES('Junia Marina Campos','juniacampos@pucmail.com','pucminas','27','analista fiscal');
  
  SELECT * FROM taskbook.user;
  
  ## alterando permissão usuario root para acesso local (localhost) 
  ## ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '32751339';
  
  ## limpando permissões atuais.
  ## flush privileges
  
  INSERT INTO projeto(nome,descricao,dataInicio,dataConclusao,task,idUser) VALUES('Limpa Arquivo','Devolver documentos para os clientes',sysdate(),sysdate()+5,'separar documentos','3');
  
  SELECT SYSDATE();
  
  SELECT u.nome, p.nome as nomeProjeto, p.descricao, p.dataInicio, p.dataConclusao FROM taskbook.projeto p
  JOIN taskbook.user u on p.idUser=u.idUser
  WHERE u.idUser=3;

INSERT INTO task(descricao,status,dataInicio,dataConclusao,responsavel,idUser) VALUES('Organizar documentos','em andamento',sysdate(),sysdate()+5,'Julia Campos','3');