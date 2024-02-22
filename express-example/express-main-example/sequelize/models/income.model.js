const { DataTypes } = require('sequelize')

module.exports = sequelize => {
	sequelize.define('income', {
		amount: {
			type: DataTypes.FLOAT
		},
		source: {
			type: DataTypes.STRING
		},
		destiny: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		},
		date: {
			type: DataTypes.DATE
		}
	})
}
