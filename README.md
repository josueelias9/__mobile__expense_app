# important information
- pagina 85 del libro
- https://github.com/sequelize/express-example/tree/master/express-main-example/sequelize

## steps
### configure database
- configure
```bash
sudo chmod 666 /var/run/docker.sock
```
- go to `http://localhost:8082/`
- set credentials
```
servidor: db
user: root
pass: example
```
- create "mydb" database
- execute script
```bash
npm run setup-example-db
```
### configure backend
- run backend
```bash
npm run start
```
- try this endpoint for testing `localhost:8080/api/expenses`
### configure frontend
- run frontend
```bash
npx expo start
```
- press `w` to activate web enviroment
- go to `http://localhost:19006`
