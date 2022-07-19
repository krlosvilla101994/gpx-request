const create = async (models, data) => {
	return models.Person.create(data);
};

const findById = async (models, id) => {
	return await models.Person.findByPk(id);
};

const updateById = async (models, id, data) => {
	return await models.Person.update(data, { where: { id } });
};

const deleteById = async (models, id) => {
	return await models.Person.destroy({ where: { id } });
};

const findAll = async (models) => {
	return await Person.findAll();
};

module.exports = Object.freeze({
	create,
	findById,
	updateById,
	deleteById,
	findAll,
});
