CREATE database TASKBOOK;
USE taskbook;

CREATE TABLE CARGO (
  idCargo INT auto_increment PRIMARY KEY,
  nome VARCHAR(255),
  descricao VARCHAR(255)
  );
  
  INSERT INTO cargo(nome,descricao) VALUES('Gerente de TI','Gerenciar a tristeza infinita dos profissionais');
  
CREATE TABLE USER (
  idUser INT auto_increment PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255) unique,
  senha VARCHAR(255),
  idade INT(100),
  idCargo INT,
  foreign key (idCargo) REFERENCES CARGO(idCargo)
  );
  
   INSERT INTO user(nome,email,senha,idade,idCargo) VALUES('Junia Marina Campos','juniacampos@pucmail.com','pucminas','27','1');
  
  ## ALTER TABLE USER ADD foreign key (idCargo) REFERENCES CARGO(idCargo);
  ## ALTER TABLE USER ADD idCargo INT;

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
  idUser INT,
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  status VARCHAR(255),
  );
  
   INSERT INTO projeto(nome,descricao,dataInicio,dataConclusao,idUser,status) VALUES('Limpa Arquivo','Devolver documentos para os clientes',sysdate(),sysdate()+5,'2','em andamento');

## Tabela Tarefas

CREATE TABLE TASK (
  idTask INT auto_increment PRIMARY KEY,
  descricao VARCHAR(255),
  status VARCHAR(255),
  dataInicio DATE,
  dataConclusao DATE,
  idUser INT,
  idProjeto INT,
  FOREIGN KEY (idUser) REFERENCES USER(idUser),
  FOREIGN KEY (idProjeto) REFERENCES PROJETO(idProjeto)
  );
  
  INSERT INTO task(descricao,status,dataInicio,dataConclusao,idUser,idProjeto) VALUES('Organizar documentos','em andamento',sysdate(),sysdate()+5,'2','2');
  
  ## ALTER TABLE TASK ADD foreign key (idProjeto) REFERENCES PROJETO(idProjeto);
  ## ALTER TABLE TASK ADD idProjeto INT;

## Tabela Documentos

CREATE TABLE DOCUMENTO (
  extensaoDoc VARCHAR(255),
  nomeDoc VARCHAR(255),
  idUser INT,
  FOREIGN KEY (idUser) REFERENCES USER(idUser)
  );
  
  SELECT * FROM taskbook.user;
  
  ## ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '32751339';
  
  ## flush privileges
  
  SELECT SYSDATE();
  
  SELECT u.nome, p.nome as nomeProjeto, p.descricao, p.dataInicio, p.dataConclusao FROM taskbook.projeto p
  JOIN taskbook.user u on p.idUser=u.idUser
  WHERE u.idUser=3;


