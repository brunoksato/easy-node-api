var db = require('../db/postgresql');
var sequelize = require('sequelize');

var alunoModel = db.define('aluno',{
    nome:{
        type: sequelize.STRING
    },
    email:{
        type: sequelize.STRING
    },
    senha:{
        type: sequelize.STRING
    },
    rua:{
        type: sequelize.STRING
    },
    numero:{
        type: sequelize.STRING
    },
    complemento:{
        type: sequelize.STRING
    },
    bairro:{
        type: sequelize.STRING
    },
    cidade:{
        type: sequelize.STRING
    },
    estado:{
        type: sequelize.STRING
    },
    cep:{
        type: sequelize.STRING
    },
    cpf:{
        type: sequelize.STRING
    }
}, {
  freezeTableName: true,
  timestamps  : false,
  underscored : true
});

module.exports = alunoModel;
