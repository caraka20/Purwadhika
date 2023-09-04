const express = require("express")
const app = express()
// const lala = require("cors")
// app.use(lala())

const {hotelRouter} = require("./router")
app.use("/hotel", hotelRouter)

app.listen(3001, () => {
    console.log("done bang done");
})
