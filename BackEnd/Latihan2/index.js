const express = require("express");
const app = express();
const {usersRouter} = require("./routers")
app.use(express.json())

// ngodingnya disini
app.get("/", (req, res) => {
    res.send("ini get route utama");
});

app.use("/users", usersRouter)

app.listen(3000, () => {
    console.log("server telah dijalankan");
});
