const fs = require("fs")

module.exports = {
    getMovies : (req, res) => {
        const input = req.query
        const data = JSON.parse(fs.readFileSync("./db/db.json"))
        const properti = []
        for (const i in input) {
            properti.push(i)
        }
        // console.log(properti);
        const hasilFilter = data.movies.filter((item) => {
            if (properti.length == 1) {
                return input[properti[0]].replace("%", " ").includes(item[properti[0]])
            } else if (properti.length == 2) {
                return input[properti[0]].replace("%", " ").includes(item[properti[0]]) &&
                input[properti[1]].replace("%", " ").includes(item[properti[1]])
            } else if (properti.length == 3) {
                return input[properti[0]].replace("%", " ").includes(item[properti[0]]) &&
                input[properti[1]].replace("%", " ").includes(item[properti[1]]) && 
                input[properti[2]].replace("%", " ").includes(item[properti[2]])
            } else if (properti.length == 0) {
                return item
            }
        })
        res.send(hasilFilter)
    }
}
