const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mydb"
})

db.connect((err) => {
    if(err) return console.log(`error ${err.message}`);
    console.log("seccess");
})

module.exports = db