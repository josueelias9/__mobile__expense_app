const { models } = require('../../sequelize')

async function getAll(req, res) {
	const expenses = await models.expense.findAll()
	res.status(200).json(expenses)
}

module.exports = {
	getAll
}
