const express = require("express");
const app = express();
app.use(express.json());
const mysql = require("mysql2")

const userController = require("./router/userRouter");
app.use("/home", userController);

const dbPoll = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'express'
  });

app.use("/", (req, res) => {
  dbPoll.execute("SELECT * FROM express", (err, rows) => {
    if (err) {
      res.json({
        message: "failed",
      })
    } else {
      res.json({
        message: "data berhasil di get",
        data: rows
      })
    }
  })
})

app.listen(3001, () => {
  console.log("selamat server telah dijalankan");
});
