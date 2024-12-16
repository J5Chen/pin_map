const { Pool } = require("pg");
require('dotenv').config();
console.log(process.env.PSQL_ROLE_NAME)
// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.PSQL_ROLE_NAME,
  database: "top_users",
  password: process.env.PSQL_PASSWORD,
  port: 5432 // The default port
});