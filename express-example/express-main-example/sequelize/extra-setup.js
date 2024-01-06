function applyExtraSetup(sequelize) {
	const { instrument, orchestra, client, expense, expenseType } = sequelize.models

	orchestra.hasMany(instrument)
	instrument.belongsTo(orchestra)

	client.hasMany(expense)
	expense.belongsTo(client)

	client.hasMany(expense)
	expense.belongsTo(client)

}

module.exports = { applyExtraSetup }
