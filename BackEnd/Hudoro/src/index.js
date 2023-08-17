const express = require("express")
const usersRoutes = require("./routes/Users") // import dari file routes
const middlewareLogReq = require("./middleware/logs")

const app = express()
// app.use(express.json())

app.use((req, res, next) => {
    console.log("log terjadi request ke API ini");
    next()
}) 
// artinya semua request akan masuk ke jembatan ini terlebih dahulu sebelum dia dilanjutkan ke app.method lainnya.
// jadi ketika semua method post dijalankan maka akan nge jalanin middleware terlebih dahulu dan dilakukan pengecek an

app.use(middlewareLogReq)


app.use("/users", usersRoutes)

// app.get("/", (req, res) => {
//     res.send("<h1> ini send pakek tag HTML h1 </h1>")
// })


app.listen(4000, () => {
    console.log("berhasil di running di port 4000");
})

