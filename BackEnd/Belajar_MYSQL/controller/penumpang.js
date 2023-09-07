// const { log } = require("console")
const db = require("../connection/db")
// const util = require("util")
// const query = util.promisify(db.query).bind(db)

module.exports = {

    // 0. mencari data penumpang yg selamat dengan inputan user
    findPenumpang : async (req, res) => {
        try {
            const survived = req.query.survived
            const findAll = await db.execute(`SELECT * FROM passengers WHERE survived = ${survived}`)
            // console.log(db);
            res.status(200).send({
                isError: false,
                message: "data berhasil didapatkan",
                data: findAll
            })
        } catch (error) {
            console.log(error.message);
        }
    },

    // 1. Tampilkan informasi data penumpang sesuai dengan pencarian user (user dapat mencari informasi berdasarkan nama penumpangnya)
    findNama : async (req, res) => {
        try {
            const input = req.query.nama
            const [cariNama] = await db.execute(`SELECT * FROM passengers WHERE name LIKE ? `, [`%${input}%`])
            console.log(db.query);
            res.send({
                data: cariNama
            })
        } catch (error) {
            res.send(error.message)
        }
    },

    // 2. Tampilkan informasi total penumpang yang selamat
    totalSelamat : async (req, res) => {
        try {
            const [data] = await db.execute(`SELECT * FROM passengers WHERE survived = 1;`)
            res.send({
                message : "informasi penumpang yg selamat",
                data : data
            })
        } catch (error) {
            
        }
    },

    // 3. Tampilkan informasi total penumpang pria dan total penumpang wanita yang selamat
    priaWanitaSelamat : async (req, res) => {
        try {
            const SQL2 = `SELECT sex, COUNT(*) FROM passengers WHERE survived = 1 GROUP BY sex`
            const SQL = `SELECT sex, SUM(CASE WHEN survived = 1 THEN 1 ELSE 0 END) AS total_selamat FROM passengers GROUP BY sex;`
            const [data] = await db.execute(SQL2)
            res.send({
                message: "toal pria dan wanita yang selamat",
                data : data
            })
        } catch (error) {
            res.send(error.message)
        }
    },

    // 4. Tampilkan informasi list penumpang yang selamat dan berada di class yang sesuai dengan pencarian user
    selamatBerdasarkanClass : async (req, res) => {
        const [data] = await db.execute(`SELECT * FROM passengers WHERE survived = 1 AND Pclass = ${req.query.class}`)
        res.send({
            message: `list penumpang selamat dengan class ${req.query.class}`,
            data: data
        })
    }
}