const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('swap', 'admin', 'admin', {
//     host: 'localhost',
//     dialect: 'postgres',
//     host: 5432
//   });
const sequelizeConfig = {
    host: "localhost",
    dialect: "postgres",
    schema: "swap",
    timezone: "Europe/Paris",
    logging: false,
    define: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  };
const sequelize = new Sequelize("swap", 'admin', 'admin', sequelizeConfig);

sequelize.authenticate().then(() => {
    require("./migration")
    require("./migrations")
    console.log('connection ok')
  })
module.exports = sequelize
  