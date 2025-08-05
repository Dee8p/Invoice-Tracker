const { Sequelize } = require("../models");

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
});
console.log("Password from env:", process.env.DB_PASS);

module.exports = sequelize;