const { Pool } = require("pg");
require("dotenv").config({ path: '../.env' });

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.PSQL_ROLE_NAME,
  database: "pin_maps",
  password: process.env.PSQL_PASSWORD,
  port: 5432 // The default port
});