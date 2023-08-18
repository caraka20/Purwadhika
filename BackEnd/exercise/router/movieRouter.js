const express = require("express")
const {movieController} = require("../controller")
const route = express.Router()

route.get("/get-all", movieController.getMovies)

module.exports = route