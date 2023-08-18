const express = require("express")
const app = express()
const cors = require("cors")
const {userRouter, movieRouter} = require("./router")
app.use(express.json())
app.use(cors())

// console.log(movieRouter);

app.use("/users", userRouter)
app.use("/movies", movieRouter)

app.listen(3004, () => {
    console.log("selamat server anda berjalan");
})

