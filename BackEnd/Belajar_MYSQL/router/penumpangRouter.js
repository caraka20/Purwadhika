const express = require("express")
const route = express.Router()

const {penumpangController} = require("../controller")

route.get("/", penumpangController.findPenumpang)
route.get("/findNama", penumpangController.findNama)
route.get("/totalSelamat", penumpangController.totalSelamat)
route.get("/priaWanitaSelamat", penumpangController.priaWanitaSelamat)
route.get("/selamatBerdasarkanClass", penumpangController.selamatBerdasarkanClass)

module.exports = route