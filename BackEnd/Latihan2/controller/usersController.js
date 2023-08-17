// file ini berisi fungsi fungsi yang nantinya akan di oper ke routers
/*
1. bikin db dummy.
2. kita ambil inputan req.body dari users.
3. kita ambil semua data dari db.json, dan kita simpan kedalam variable.
4. kita bakal bikin UID dengan Date.now.
5. kita menulis ulang db.json nya.
6. kita bikin kondisi, kalo misal username dan email yg dimasukan users itu sudah ada di db
maka users tidak bisa register dengan username tersebut.
*/

const fs = require("fs")
module.exports = {
    postUser : (req, res) => {
        const input = req.body
        const data = JSON.parse(fs.readFileSync("./db/db.json"))
        const temp = data.users.find((value) => {
            return value.username === input.username && value.email === input.email
        })
        console.log(temp);
        if (temp == undefined) {
            const UID = Date.now()
            data.users.push({...input, uid : UID})
            // ini buat nge write ke db.json.
            fs.writeFileSync("./db/db.json", JSON.stringify(data))
            res.send(data)
        } else {
            res.send("maaf username / email sudah terdaftar")
        }
    },

    getUser : (req, res) => {
        res.send("ini get user")
    }
}
