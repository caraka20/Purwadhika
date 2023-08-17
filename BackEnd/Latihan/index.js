const express = require("express")
const app = express()
const fs = require("fs")
// secara default kita menerima text, makanya itu kita pakai express.json biar ngubah text jadi json
app.use(express.json())

// app.method("path", (req, res)=> {
 // disini kita ngodingnya
// })
// login, harus get data dari db, yang sesuai apa yg kita ketik, email, password, ada? login berhasil

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/users", (req, res) => {
    const input = req.body
    console.log(input);
    const data = JSON.parse(fs.readFileSync("./db/db.json"))
    // kita butuh data dalam bentuk array? karna kita mau pakai method push.
    // const arr = [1,2,3,4] // length = 4, index = 3
    // console.log(arr[arr.length - 1]); // 3

    data.users.push({...input, id : data.users[data.users.length - 1].id + 1})
    // opt/alt/ctrl + shift + f
    // fs.writeFileSync kayak method axios.post, dia butuh 2 parameter, 1. tujuan, 2. datanya
    fs.writeFileSync("./db/db.json",JSON.stringify(data))
    res.send(data)
})

app.post("/register", (req, res) => {
    const input = req.body
    const data = JSON.parse(fs.readFileSync("./db/db.json"))

    for (const i of data.users) {
        if (input.email === i.email) {
            res.send("email sudah terdaftar")
        }
    }
    data.users.push({...input, id : data.users[data.users.length - 1]. id + 1 })
    fs.writeFileSync("./db/db.json", JSON.stringify(data))
    res.send(data)
})

app.listen(3000, () => {
    console.log("server sudah berjalan");
})
