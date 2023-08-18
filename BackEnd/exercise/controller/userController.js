const fs = require("fs")

module.exports = {
    
    postUser : (req, res) => {
        try {
            const input = req.body
            const data = JSON.parse(fs.readFileSync("./db/db.json"))
    
            const temp = data.users.find((item) => {
                return item.email === input.email
            })
    
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
                res.send("selamat berhasil didaftarkan")
            } else {
                res.send("maaf username ini sudah terdaftar")
            }
        } catch (error) {
            res.send(error.message)
        }
    },
    getUser : (req, res) => {
        const hasil = req.query
        const data = JSON.parse(fs.readFileSync("./db/db.json"))
        
        const temp = data.users.find((item) => {
            return item.email == hasil.email && item.password == hasil.password
        })
        console.log(temp);
        if (!temp) {
            res.send("maaf email atau password salah")
        } else {
            // const dataRes = {
            //     uid : temp.uid,
            //     username : temp.username,
            //     email : temp.email,
            //     role : temp.role
            // }
            res.send("selamat berhasil login")
        }
    },

    editUser : (req, res) => {
        const {idUser} = req.params
        const data = JSON.parse(fs.readFileSync("./db/db.json"))
        const user = data.users.find((item) => {
            return item.id == idUser
        })
        res.json(
            {
                message : "data berhasil update",
                data : req.body
            }
        )
    },

    deleteUser : (req, res) => {
        const {idUser} = req.params
        const data = JSON.parse(fs.readFileSync("./db/db.json"))
        const user = data.users.find(item => item.id == idUser)
        res.json(
            {
                message : "data berhasil ter delete",
                data : user
            }
        )
    }
}
