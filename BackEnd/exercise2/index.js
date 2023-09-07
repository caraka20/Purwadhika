const express = require("express")
const app = express()
app.use(express.json())


// import pengeluaran route
const {pengeluaranRoute} = require("./router")
app.use("/", pengeluaranRoute)


app.listen(3000, () => {
    console.log("selamat server berhasil berjalan");
})
