const express = require("express")
const app = express()
const {userRouter,} = require("./router")
const {moviesRouter} = require("./router")
app.use(express.json())

// app.use("/movies", moviesRouter)
console.log(moviesRouter);
// console.log(userRouter);
app.use("/users", userRouter)

app.get("/", (req, res) => {
    res.send("ini halaman utama")
})

app.listen(3000, () => {
    console.log("selamat server anda berjalan");
})