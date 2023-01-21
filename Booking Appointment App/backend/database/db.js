const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "2603",
  database: "sharpenertech",
});

module.exports = connectionPool;
