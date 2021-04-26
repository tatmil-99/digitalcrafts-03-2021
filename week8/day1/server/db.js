const Pool = require("pg").Pool;

const pool = new Pool({
  user: "tatienmiller",
  password: "",
  host: "localhost",
  port: 5432,
  database: "shopping_list",
});

module.exports = pool;