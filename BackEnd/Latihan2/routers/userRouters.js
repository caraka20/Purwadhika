const express = require("express")
const Routers = express.Router()
const {usersController} = require("../controller")

Routers.post("/register", usersController.postUser)

module.exports = Routers
