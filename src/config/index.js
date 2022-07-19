const HTTP = {
	port: process.env.HTTP_PORT || 3000,
};

const Sequelize = require("./sequelize-config.json");

module.exports = { HTTP, Sequelize };
