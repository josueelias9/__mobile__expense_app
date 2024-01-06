const { DataTypes } = require('sequelize')

module.exports = sequelize => {
	sequelize.define('client', {
		name: {
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.STRING
		},
		address: {
			type: DataTypes.STRING
		}
	})
}
