const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('swap', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    host: 5432
  });

module.exports = sequelize
  