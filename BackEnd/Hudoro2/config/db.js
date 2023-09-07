const mysql = require("mysql2")

const conection = mysql.createConnection({
    host: "localhost",
    root: "root",
    database: "express"
})

module.exports = conection.promise()