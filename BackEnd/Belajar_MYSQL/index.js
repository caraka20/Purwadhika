const express = require("express")
const app = express()
const mysql = require("mysql2")

const {penumpangRouter} = require("./router")
app.use("/", penumpangRouter)



app.listen(3000, () => {
    console.log("selamat server berjalan");
})
