const express = require("express");
const app = express();
const fs = require("fs"); // ngambil file
app.use(express.json()); // mengambil data dari request. 

// import routes
const {usersRouter} = require("./routes")
app.use("/users", usersRouter)

app.get("/", (req, res) => {
  res.send("ini get utama");
});

// app.get("/users", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./db/db.json"));
//   res.send(data)
// })

// app.get("/login", (req, res) => {
//   const dataUsers = req.query;
//   console.log(dataUsers);
//   const data = JSON.parse(fs.readFileSync("./db/db.json"));
//   const cekData = data.users.map(
//     (item) =>
//       item.email === dataUsers.email && item.password === dataUsers.password
//   );
//   const hasil = cekData.includes(true);
//   console.log(hasil);
//   if (hasil) {
//     res.send("berhasil login");
//   } else {
//     res.send("email atau password salah");
//   }
// });

// app.post("/daftar", (req, res) => {
//   // 1. ambil data dari req
//   const dataUsers = req.body;

//   // 2. ambil data db.json
//   const data = JSON.parse(fs.readFileSync("./db/db.json"));

//   const cekEmail = data.users.map((item) => item.email === dataUsers.email);
//   const hasil = cekEmail.includes(true);

//   if (!hasil) {
//     // 3. manipulasi (add new data)
//     data.users.push({
//       ...dataUsers,
//       id: data.users[data.users.length - 1].id + 1,
//     });
//     // 4. simpan data ke db.json
//     fs.writeFileSync("./db/db.json", JSON.stringify(data)); // parameter ke 1 adalah data api, yg kedua itu data yg mau kita masukin
//     res.send("data berhasil di daftarkan");
//   } else {
//     res.send("email sudah ada");
//   }
// });

// app.get("/filter", (req, res) => {
//     const hasil = req.query
//     // hasil = {"apaya" : "25"}
//     console.log(hasil);

//     const filterquery = hasil.apaya.split("").map((value) => {
//         return Number(value)
//     })

//     const data = JSON.parse(fs.readFileSync("./db/db.json"))
//     // console.log(data.products);

//     // const arr = [1,2,3,4,5]
//     // const hasilnya = arr.filter((value) => {
//     //   return value > 3
//     // })
//     // console.log(hasilnya);

//     const pilter = data.products.filter((item) => {
//         return filterquery.includes(item.typeId)
//     })
    
//     res.send(pilter)
// })

app.listen(3000, () => {
    console.log("mulai");
});
