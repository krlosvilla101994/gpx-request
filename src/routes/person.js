module.exports = function ({ app, models }) {
	const prefix = require("../utils/const").prefix;
	const PersonController = require("../controllers/person");
	const personRoute = `${prefix}/person`;
	const personSingleRoute = `${prefix}/person/:personId`;

	//CollectionRoute
	app.get(personRoute, async (req, res) => {
		try {
			res.json(await PersonController.findAll(models));
		} catch (error) {
			res.status(500).json({ message: error?.message });
		}
	});
	app.post(personRoute, async (req, res) => {
		try {
			res.json(await PersonController.create(models, req.body));
		} catch (error) {
			res.status(500).json({ message: error?.message });
		}
	});

	//SingleRoute
	app.get(personSingleRoute, async (req, res) => {
		try {
			res.json(await PersonController.findById(models, req.params.personId));
		} catch (error) {
			res.status(500).json({ message: error?.message });
		}
	});
	app.patch(personSingleRoute, async (req, res) => {
		try {
			res.json(await PersonController.updateById(models, req.params.personId, req.body));
		} catch (error) {
			res.status(500).json({ message: error?.message });
		}
	});
	app.delete(personSingleRoute, async (req, res) => {
		try {
			res.json(await PersonController.deleteById(models, req.params.personId));
		} catch (error) {
			res.status(500).json({ message: error?.message });
		}
	});
};
