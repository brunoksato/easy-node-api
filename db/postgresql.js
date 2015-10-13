var Sequelize = require('sequelize');
//var config = require('../config');
var sequelize = new Sequelize("postgres://localhost:5432/raul");

module.exports = sequelize;
