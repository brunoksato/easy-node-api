var sequelize = require('../db/postgresql');
var Sequelize = require('sequelize');

var professorModel = sequelize.define('professor',{
    nome:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    senha:{
        type: Sequelize.STRING
    },
    rua:{
        type: Sequelize.STRING
    },
    numero:{
        type: Sequelize.STRING
    },
    complemento:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cpf:{
        type: Sequelize.STRING
    },
    banco:{
        type: Sequelize.STRING
    },
    agencia:{
        type: Sequelize.STRING
    },
    conta:{
        type: Sequelize.STRING
    }
}, {
  freezeTableName: true,
  timestamps  : false,
  underscored : true
});

module.exports = professorModel;
