why I can not connect to mysql?
```yml
# Use root/example as user/password credentials
version: '3.1'

services:

  db:
    image: mysql
    # NOTE: use of "mysql_native_password" is not recommended: https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password
    # (this is just an example, not intended to be a production configuration)
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: example

    ports:
      - "3306:3306"

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```
```js
const Sequelize = require('sequelize')
const faker = require('@faker-js/faker').faker

// Set up Sequelize connection
const sequelize = new Sequelize('mydb', 'root', 'example', {
  host: '127.0 0.1:3306',
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

```