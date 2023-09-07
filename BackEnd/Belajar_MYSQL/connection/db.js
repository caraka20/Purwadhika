const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "titanic",
    port: 3306
})

db.connect((err) => {
    if(err) return console.log(`error ${err.message}`);
    console.log("seccess");
})

// app.use("/", (req, res) => {
//     const dbb = db.execute("SELECT * FROM passengers", (err, result) => {
//         console.log(result);
//     })
//     res.send()
// })

module.exports = db.promise()