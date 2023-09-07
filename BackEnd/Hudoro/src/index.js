const express = require("express")
const usersRoutes = require("./routes/Users") // import dari file routes
// const middlewareLogReq = require("./middleware/logs")
require('dotenv').config()

const app = express()
app.use(express.json())
console.log(usersRoutes);
// app.use((req, res, next) => {
//     console.log("log terjadi request ke API ini");
//     next()
// }) 
// artinya semua request akan masuk ke jembatan ini terlebih dahulu sebelum dia dilanjutkan ke app.method lainnya.
// jadi ketika semua method post dijalankan maka akan nge jalanin middleware terlebih dahulu dan dilakukan pengecek an

// app.use(middlewareLogReq)

app.use("/users", usersRoutes)


app.listen(3001, () => {
    console.log("berhasil di running di port 4000");
})

