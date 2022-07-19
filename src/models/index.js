module.exports = function (sequelize, Sequelize) {
	const Person = require("./person")(sequelize, Sequelize);
	return { Person };
};
