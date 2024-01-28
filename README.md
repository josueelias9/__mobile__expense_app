# important information
- pagina 85 del libro
- https://github.com/sequelize/express-example/tree/master/express-main-example/sequelize

## steps
### configure database
- configure
```bash
sudo chmod 666 /var/run/docker.sock
```
- start database and admin containers
```bash
docker compose up
```
- go to `http://localhost:8082/`
- set credentials (if it doensnt work, insert any other password, such as `mysql_native_password` and then try again with the proposed credentials).
```
servidor: db
user: root
pass: example
```
- create `mydb` database
- execute script
```bash
cd ./__mobile__expense_app/express-example/express-main-example
npm run setup-example-db
```
### configure backend
- run backend
```bash
cd ./__mobile__expense_app/express-example/express-main-example
npm run start
```
- try this endpoint for testing (GET) `localhost:8080/api/expenses`
### configure frontend
- run frontend
```bash
cd ./frontend/expensesApp
npm run web
```
- press `w` to activate web enviroment
- go to `http://localhost:19006`
- if not running backend, mock the it with this command:
```bash
cd ./frontend/expensesApp
npx json-server db.json 
```
