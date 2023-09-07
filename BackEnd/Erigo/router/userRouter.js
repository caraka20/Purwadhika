const express = require("express")
const route = express.Router()
const {userController} = require("../controller")

route.post("/register", userController.register)
route.get("/login", userController.login)
route.get("/productList", userController.productList)
route.get("/filter", userController.filter)
route.get("/detail/:id", userController.detailProduct)

module.exports = route