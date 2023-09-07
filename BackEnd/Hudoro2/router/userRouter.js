const { userController } = require("../controller");
const express = require("express");
const route = express.Router();

route.get("/", userController.getAllUser);

module.exports = route;
