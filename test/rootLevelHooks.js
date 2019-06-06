require('dotenv').config()
var { DB } = require("../src/databaseService");
const microservice = require('../src/networkLayer')



before(async function() {
  this.DB = await DB.startConnection();
  this.microservice = microservice
});

after(async function() {
  await this.DB.end();
});
