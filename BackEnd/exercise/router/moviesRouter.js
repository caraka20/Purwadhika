const express = require("express")
const Router = express.Router()
const {moviesController} = require("../controller")

Router.get("/get-all", moviesController.getMovies)

module.export = Router