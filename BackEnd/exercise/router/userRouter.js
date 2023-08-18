const express = require("express")
const {userController} = require("../controller")
const Router = express.Router()

Router.post("/register", userController.postUser)
Router.get("/login", userController.getUser)
Router.patch("/:idUser", userController.editUser)
Router.delete("/:idUser", userController.deleteUser)

module.exports = Router
