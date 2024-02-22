const sequelize = require('../sequelize')
const { pickRandom, randomDate } = require('./helpers/random')
const { faker } = require('@faker-js/faker')

async function reset() {
	console.log('Will rewrite the SQLite example database, adding some dummy data.')

	await sequelize.sync({ force: true })

	// expenseType table
	await sequelize.models.expenseType.bulkCreate([
		{ name: 'food' },
		{ name: 'entertainment' },
		{ name: 'drink and cigarretes' },
		{ name: 'studies' },
		{ name: 'transportation' },
		{ name: 'others' }
	])

	// client table
	let clientData = []

	for (let i = 0; i <= 10; i++) {
		clientData.push({
			name: faker.person.fullName(),
			address: faker.location.streetAddress(),
			password: faker.internet.password()
		})
	}

	await sequelize.models.client.bulkCreate(clientData)

	// income table
	let incomeData = []

	for (let i = 0; i <= 10; i++) {
		incomeData.push({
			amount: faker.finance.amount(),
			source: faker.person.fullName(),
			destiny: pickRandom(['debit card', 'credit card', 'cash', 'international account']),
			description: faker.lorem.sentence(),
			date: faker.date.recent()
		})
	}

	await sequelize.models.income.bulkCreate(incomeData)

	// expense table
	const expenseTypes = await sequelize.models.expenseType.findAll()

	for (const client of await sequelize.models.client.findAll()) {
		for (let i = 0; i < 2; i++) {
			const expenseType = pickRandom(expenseTypes)
			await client.createExpense({
				amount: faker.finance.amount(),
				date: faker.date.recent(),
				shortDescription: faker.lorem.sentence(),
				longDescription: faker.lorem.paragraph(),
				expenseTypeId: expenseType.id
			})
		}
	}

	console.log('Done!')
}

reset()
