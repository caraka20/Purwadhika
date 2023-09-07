const {hotelController} = require("../controller")
const express = require("express")
const Router = express.Router()
const uploud = require("../middleware/uploud")

Router.get("/search", hotelController.search)
Router.post("/create",uploud, hotelController.createHotel)
Router.put("/updateImage",uploud, hotelController.updateImage)

module.exports = Router
