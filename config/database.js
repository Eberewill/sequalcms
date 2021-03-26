const { Sequelize } = require("sequelize");
const db = new Sequelize("willsdb", "postgres", "eberechukwu", {
  host: "localhost",
  dialect: "postgres",
  port: 5200,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
