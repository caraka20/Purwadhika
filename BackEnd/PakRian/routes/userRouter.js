const express = require("express")
const Router = express.Router()

// import middleware
const {apiKey} = require("../middleware/apiKey")

// import controller
const {userController} = require("../controller")

Router.get("/", apiKey, userController.getUsers)
// Router.post("/", apiKey, userController.getUsers)

module.exports = Router