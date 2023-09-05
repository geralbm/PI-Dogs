const { Sequelize } = require('sequelize');

const database = new Sequelize('postgres://postgres:1234@localhost:5432/dogs')


module.exports = {database}