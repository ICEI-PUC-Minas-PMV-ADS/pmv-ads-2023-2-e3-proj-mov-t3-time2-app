-- Tabela Usuário

CREATE TABLE USER (
  idUser INT PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255),
  senha VARCHAR(255),
  idade INT(100),
  cargo VARCHAR(255)
  );

-- Tabela Autenticação

CREATE TABLE AUTH (
  email VARCHAR(255),
  senha VARCHAR(255)
  );

-- Tabela Projeto

CREATE TABLE PROJETO (
  idProjeto INT PRIMARY KEY,
  nome VARCHAR(255),
  descricao VARCHAR(255),
  dataInicio DATE,
  dataConclusao DATE,
  task VARCHAR(255),
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  );

-- Tabela Tarefas

CREATE TABLE TASK (
  idTask INT PRIMARY KEY,
  descricao VARCHAR(255),
  status VARCHAR(255),
  dataInicio DATE,
  dataConclusao DATE,
  responsavel VARCHAR(255),
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  );

-- Tabela Documentos

CREATE TABLE DOCUMENTO (
  extensaoDoc VARCHAR(255),
  nomeDoc VARCHAR(255),
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  );
  
