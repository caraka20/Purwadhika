const {userController} = require("../controller")
const express = require("express")
const Router = express.Router()
const {verify} = require("../lib/jwt")
const uploud = require("../middleware/uploud")

Router.get("/login",uploud, userController.login)
Router.post("/register", userController.register)
Router.put("/updateKode/:id",verify, userController.updateKode)
Router.put("/updateStatus/:id", verify, userController.updateStatus)

module.exports = Router