const { models } = require('../../sequelize')
const { Op } = require('sequelize')

// view: expenses made x day clasified by type
// view: total sum of expenses made x month vs budget for this month

async function getAll(req, res) {
	// Obtener la fecha del parámetro de consulta
	const { date } = req.query // Espera una fecha en formato 'YYYY-MM-DD'
	if (!date) {
		return res.status(400).json({ message: 'La fecha es requerida' })
	}

	try {
		// Formatear la fecha para asegurar que cubra todo el día específico
		const startDate = new Date(date)
		const endDate = new Date(date)
		endDate.setDate(endDate.getDate() + 1)

		// Filtrar gastos por la fecha específica usando el rango entre startDate y endDate
		const expenses = await models.expense.findAll({
			where: { date: { [Op.gte]: startDate, [Op.lt]: endDate } }
		})

		res.status(200).json(expenses)
	} catch (error) {
		console.error('Error al obtener los gastos:', error)
		res.status(500).json({ message: 'Error interno del servidor' })
	}
}

module.exports = {
	getAll
}
