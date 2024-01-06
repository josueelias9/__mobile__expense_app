const { DataTypes } = require('sequelize')

module.exports = sequelize => {
	sequelize.define('expense', {
		amount: {
			type: DataTypes.FLOAT
		},
		shortDescription: {
			type: DataTypes.STRING
		},
		longDescription: {
			type: DataTypes.STRING
		},
		date: {
			type: DataTypes.DATE
		}
	})
}
