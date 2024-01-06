const { DataTypes } = require('sequelize')

module.exports = sequelize => {
	sequelize.define('expenseType', {
		name: {
			type: DataTypes.STRING
		}
	})
}
