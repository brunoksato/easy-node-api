var orm = require('sequelize');
var sequelize = new orm("postgres://localhost:5432/raul");

module.exports = sequelize;
