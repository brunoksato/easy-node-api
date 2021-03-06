CREATE DATABASE raul;

CREATE TABLE professor(
	id serial PRIMARY KEY,
	nome VARCHAR (200) NOT NULL,
	email VARCHAR (100) NOT NULL,
	senha VARCHAR (50) NOT NULL,
	rua VARCHAR (200) NOT NULL,
	numero VARCHAR (200) NOT NULL,
	complemento VARCHAR (200) NULL,
	bairro VARCHAR (200) NOT NULL,
	cidade VARCHAR (200) NOT NULL,
	estado VARCHAR (200) NOT NULL,
	cep VARCHAR(20) NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	banco VARCHAR(50) NOT NULL,
	agencia VARCHAR(50) NOT NULL,
        conta VARCHAR(50) NOT NULL
);

CREATE TABLE aluno(
	id serial PRIMARY KEY,
	nome VARCHAR (200) NOT NULL,
	email VARCHAR (100) NOT NULL,
	senha VARCHAR (50) NOT NULL,
	rua VARCHAR (200) NOT NULL,
	numero VARCHAR (200) NOT NULL,
	complemento VARCHAR (200) NULL,
	bairro VARCHAR (200) NOT NULL,
	cidade VARCHAR (200) NOT NULL,
	estado VARCHAR (200) NOT NULL,
	cep VARCHAR(20) NOT NULL,
	cpf VARCHAR(11) NOT NULL
);
