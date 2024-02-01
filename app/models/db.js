const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: process.env.DB_TYPE, // (e.g., 'sqlite', 'mysql', 'postgres', etc.)
  storage: process.env.DB_PATH, 
});

module.exports = sequelize;
