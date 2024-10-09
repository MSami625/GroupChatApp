const Sequelize = require("sequelize");
const mysql2 = require("mysql2");

const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASS}`,
  {
    dialect: "mysql",
    dialectModule: mysql2,
    host: `${process.env.DB_HOST}`,
  }
);

module.exports = sequelize;
