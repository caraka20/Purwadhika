const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({
    extended : true
}))

const {hotelRouter, userRouter} = require("./router")
app.use("/hotel", hotelRouter)
app.use("/user", userRouter)
// console.log(userRouter);

app.use((err, req, res, next) => {
    const statusCode = err.status || 500
    const statusMessage = err.message || "ini error"
    return res.status(statusCode).send({
        isError : true,
        message : statusMessage,
        data : null
    })
})

app.listen(3001, () => {
    console.log("done bang done");
})
