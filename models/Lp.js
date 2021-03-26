const Sequelize = require("sequelize");
const db = require("../config/database");

const Lp = db.define("lp", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sheetTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageSlider: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Lp;
