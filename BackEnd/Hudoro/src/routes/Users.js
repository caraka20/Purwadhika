const express = require("express") // wajib call express

const router = express.Router() // wajib bikin variable untuk ngejalanin fungsi Router
const userController = require("../controller/users")

// codingan disini
router.get("/", userController.getAllUsers)
router.post("/", userController.postAllUsers)

module.exports = router // wajib exports disini

