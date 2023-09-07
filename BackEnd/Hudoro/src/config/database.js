const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'express'
  });

  module.exports = connection.promise()