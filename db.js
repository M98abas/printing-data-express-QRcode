const mysql = require("mysql2/promise");
const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "UserName",
    password: "Password",
    database: "DBName",
  },
  listPerPage: 10,
};


async function query(sql, values, params) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql, values, params);
  return results;
}

module.exports = {
  query,
};
