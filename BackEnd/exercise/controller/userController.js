const fs = require("fs")

module.exports = {
    
    postUser : (req, res) => {
        const input = req.body
        const data = JSON.parse(fs.readFileSync("./db/db.json"))

        const temp = data.users.find((item) => {
            return item.username === input.username
        })
        // console.log(temp);
        if (!temp) {
            const UID = Date.now()
            const dataJadi = {...input, uid : UID}
            const dataRes = {
                uid : dataJadi.uid,
                username : dataJadi.username,
                email : dataJadi.email
            }
            data.users.push(dataJadi)
            fs.writeFileSync("./db/db.json",JSON.stringify(data))
            res.send(dataRes)
        } else {
            res.send("maaf username ini sudah terdaftar")
        }
    },

    getUser : (req, res) => {
        const hasil = req.body
        const data = JSON.parse(fs.readFileSync("./db/db.json"))
        
        const temp = data.users.find((item) => {
            return item.username === hasil.username && item.password === hasil.password
        })
        // console.log(temp);
        if (!temp) {
            res.send("maaf username atau password salah")
        } else {
            const dataRes = {
                uid : temp.uid,
                username : temp.username,
                email : temp.email,
                role : temp.role
            }
            res.send(dataRes)
        }
    }
}