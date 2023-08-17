const fs = require("fs")
// const a = require("../db/db.json")

module.exports = {
    getUsers : (req, res) => {
        const {users} = JSON.parse(fs.readFileSync("./db/db.json"))
        res.send(users)
    }
}
