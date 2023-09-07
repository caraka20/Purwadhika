const {pengeluaranController} = require("../controller")
const express = require("express")
const route = express.Router()
const {apikey} = require("../middleware/apikey")

route.get("/", apikey, pengeluaranController.getPengeluaran)
route.get("/detail/:id", pengeluaranController.getDetails)
route.post("/", pengeluaranController.postPengeluaran)
route.put("/:id", pengeluaranController.editPengeluaran)
route.delete("/:id", pengeluaranController.hapusPengeluaran)
route.get("/soal6", pengeluaranController.totalBerdasarkanTanggal)
route.get("/soal7", pengeluaranController.totalBerdasarkanKategori)

module.exports = route