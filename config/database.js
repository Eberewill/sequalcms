const { Sequelize } = require("sequelize");

/*const db = new Sequelize("willsdb", "postgres", "eberechukwu", {
  host: "localhost",
  dialect: "postgres",
  port: 5200,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});*/
/*
var db = new Sequelize("awsdb", "conwilliams", "KTxYTugQbu0n0VYQsel7", {
  host: "database-1.cgq5cwzjj2ki.us-east-1.rds.amazonaws.com",
  port: 5432,
  logging: console.log,
  maxConcurrentQueries: 100,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: { maxConnections: 5, maxIdleTime: 30 },
  language: "en",
});*/
var db = new Sequelize(
  "dalr4rll8oap0f",
  "cwikseysdctypg",
  "30dde61070a875df048d6ba9909cdd5436d92313f7197f9e0f0769653931476d",
  {
    host: "ec2-52-71-161-140.compute-1.amazonaws.com",
    port: 5432,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: "en",
  }
);

module.exports = db;
