const express = require("express")
const route = express.Router()
const {userController} = require("../controller")

route.get("/find", userController.findUsers)
route.post("/register", userController.createUser)

module.exports = route