const Sequelize = require('sequelize')
const faker = require('@faker-js/faker').faker

// Set up Sequelize connection
const sequelize = new Sequelize('mydb', 'root', 'example', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
})

// Define the Expense model
const Expense = sequelize.define('expense', {
  amount: {
    type: Sequelize.FLOAT
  },
  description: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  }
})

// Connect to the database
sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err))

// Generate and Insert Fake Data
const generateFakeData = async () => {
  try {
    await sequelize.sync()

    for (let i = 0; i < 10; i++) {
      await Expense.create({
        amount: faker.finance.amount(),
        description: faker.commerce.productName(),
        date: faker.date.past()
      })
    }

    console.log('Fake data inserted successfully.')
  } catch (error) {
    console.error('Error inserting fake data:', error)
  }
}

// Call the function
generateFakeData()
