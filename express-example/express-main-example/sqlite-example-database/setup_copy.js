const sequelize = require('../sequelize')
const { pickRandom, randomDate } = require('./helpers/random')
const {faker} = require('@faker-js/faker');


async function reset() {
	console.log('Will rewrite the SQLite example database, adding some dummy data.')

	await sequelize.sync({ force: true })

	
	let clientData = []

	for(let i=0;i<=10;i++){
		clientData.push({
			name: faker.person.fullName(),
			address: faker.location.streetAddress(),
			password: faker.internet.password(),		})
	}

	await sequelize.models.client.bulkCreate(clientData)

	for(const client of await sequelize.models.client.findAll()){
		for(let i=0;i<2;i++){
			await client.createExpense({
				amount: faker.finance.amount(),
				date: faker.date.recent(),
				shortDescription: faker.lorem.sentence(),
				longDescription: faker.lorem.paragraph(),
			})
		}
	}

	console.log('Done!')
}

reset()
