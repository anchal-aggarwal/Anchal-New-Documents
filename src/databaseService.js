var mysql = require("mysql2/promise");

let DatabaseService = {
  startConnection() {
    return mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_URL,
      password: process.env.DATABASE_PASSWORD
      //   database: "stanzacore"
    });
  }
};

module.exports = { DB: DatabaseService };
