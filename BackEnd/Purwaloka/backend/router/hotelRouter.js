const {hotelController} = require("../controller")
const express = require("express")
const Router = express.Router()

Router.get("/search", hotelController.search)

module.exports = Router
