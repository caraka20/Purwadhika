const fs = require("fs");

module.exports = {
  // 1. Dapatkan daftar pengeluaran
  getPengeluaran: (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(data.pengeluaran);
  },

  //   2. Dapatkan detail pengeluaran
  getDetails: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const data = JSON.parse(fs.readFileSync("./db/db.json"));
    const hasilFilter = data.pengeluaran.find((item) => item.id == id);
    res.send(hasilFilter);
  },

  //   3. Buat data pengeluaran baru
  postPengeluaran: (req, res) => {
    try {
        const input = req.body;
        const data = JSON.parse(fs.readFileSync("./db/db.json"));
        data.pengeluaran.push({
          ...input,
          id: data.pengeluaran[data.pengeluaran.length - 1].id + 1,
        });
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
  },

  //   4. Mengedit data pengeluaran
  editPengeluaran: (req, res) => {
    const { id } = req.params;
    const input = req.body;
    const data = JSON.parse(fs.readFileSync("./db/db.json"));
    const dataIndex = data.pengeluaran.findIndex(
        (item) => item.id === Number(id)
    );
    const dataEdit = data.pengeluaran.find((item) => item.id === Number(id));
    // console.log(dataIndex);
    const hasilEdit = { ...dataEdit, ...input };
    data.pengeluaran[dataIndex] = hasilEdit;
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.send({
      data_sebelum: dataEdit,
      hasil_edit: hasilEdit,
    });
    // res.send(id)
  },

  //   5. Hapus data pengeluaran
  hapusPengeluaran: (req, res) => {
    const { id } = req.params;
    const data = JSON.parse(fs.readFileSync("./db/db.json"));
    // const dataIndex = data.pengeluaran.findIndex(
    //   (item) => item.id === Number(id)
    // );
    // // console.log(dataIndex);
    // const dataHapus = data.pengeluaran.find((item) => item.id === Number(id));
    // data.pengeluaran.splice(dataIndex, 1);
    const hasil = data.pengeluaran.filter(item => item.id !== Number(id))
    data.pengeluaran = hasil
    // console.log(hasil);
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.send({
      message: "data berhasil kehapus",
      data: hasil,
    });
  },

  //   6. Dapatkan total pengeluaran berdasarkan rentang tanggal tgl 20 agustus - 30 agustus
  totalBerdasarkanTanggal: (req, res) => {
    const input = req.query;
    const propertiInput = Object.keys(input);
    // for (const key in input) {
    //   propertiInput.push(key);
    // }
    const data = JSON.parse(fs.readFileSync("./db/db.json"));
    const hasilFilter = data.pengeluaran.filter(
      (item) =>
        item.tanggal >= input[propertiInput[0]] && // filter tgl yang lebih dari mulai: '2023-08-19' dan 
        item.tanggal <= input[propertiInput[1]] // kurang dari selesai: '2023-08-20'
    );
    const dataPengeluaran = hasilFilter.map((item) => item.nominal);
    const totalPengeluaran = dataPengeluaran.reduce((item1, item2) => {
      return item1 + item2;
    }, 0);
    res.send({
      message: `total pengeluaran dari ${input[propertiInput[0]]} sampai ${
        input[propertiInput[1]]
      }`,
      total_pengeluaran: totalPengeluaran.toLocaleString(),
    });
  },

  // 7. Dapatkan total pengeluaran berdasarkan kategori
    totalBerdasarkanKategori: (req, res) => {
    const kategori = req.query.kategori;
    const data = JSON.parse(fs.readFileSync("./db/db.json"));
    const dataFilter = data.pengeluaran.filter(
      (item) => item.kategori.toLowerCase() == kategori.toLowerCase()
    );
    const dataPengeluaran = dataFilter.map((item) => item.nominal);
    const totalPengeluaran = dataPengeluaran.reduce((item1, item2) => {
      return item1 + item2;
    }, 0);
    // console.log(totalPengeluaran);
    res.send({
      message: `total pengeluaran berdasarkan kategori ${kategori}`,
      total_pengeluaran: totalPengeluaran.toLocaleString(),
    });
  }

};
