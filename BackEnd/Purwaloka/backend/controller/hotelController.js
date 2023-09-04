const { Op } = require("sequelize");
const db = require("../models");
const { sequelize } = require("../models");
// CiBatteryFull
module.exports = {
  search: async (req, res) => {
    try {
      const { nama_kota } = req.query;

      const findHotels = await db.hotel.findAll({
        attributes: ["nama_hotel", "kota_id",
      [sequelize.col("nama_kota"),"nama_kota"]
      ],
        include: [
          {
            model: db.hotel_image,
            attributes: ["url"],
          },
          {
            model: db.room,
            attributes: [
              [sequelize.fn("MIN", sequelize.col("harga")), "minPrice"],
            ],
          },
          {
            model: db.kota,
            attributes: [],
            where: { nama_kota: nama_kota },
          },
        ],
        group: ["hotel.id"],
      });

      // const test1 = await db.room.findAll({
      //   attributes: [
      //     "id",
      //     [sequelize.fn("MIN", sequelize.col("total_room")), "min aja"],
      //     "hotel_id",
      //   ],
      // });

      // const test2 = await db.room.findAll({
      //   where: {
      //     harga: 100000,
      //     total_room: 10,
      //   },
      // });

      // const test3 = await db.room.findAll({
      //   where: {
      //     harga: {
      //       [Op.eq]: [200000, 100000], // Op.eq itu cuma bisa 1 didalm array nya, kalo mau banyak pakai Op.and
      //     },
      //   },
      // });

      // const test4 = await db.hotel.findAll({
      //   where: {
      //     [Op.and]: [{ kota_id: 3 }, { lokasi: "tangerang kota" }],
      //   },
      // });

      // const test5 = await db.hotel.findAll({
      //   where: {
      //     [Op.or]: [{ lokasi: "jakarta pusat" }, { lokasi: "bogor tengah" }],
      //   },
      // });

      // // menghapus data dengan id : 1
      // // const test6 = await db.hotel.destroy({
      // //   where : {
      // //     id : 1
      // //   }
      // // })

      // const test7 = await db.hotel.findAll({
      //   attributes: [
      //     "nama_hotel",
      //     "lokasi",
      //     [sequelize.col("nama_kota"), "nama_kota_bang"],
      //   ],
      //   include: [
      //     {
      //       model: db.kota,
      //       attributes: [],
      //     },
      //   ],
      // });

      // // coba cariin aku jumlah semua hotel yang ada di tangerang. ngitungin semua total baris
      // const test8 = await db.hotel.findAll({
      //   attributes: [
      //     "nama_hotel",
      //     [sequelize.fn("SUM", sequelize.col("total_room")), "total_aja"],
      //   ],
      //   include: [
      //     {
      //       model: db.room,
      //       attributes: [
      //         [sequelize.fn("SUM", sequelize.col("total_room")), "total2"],
      //       ],
      //     },
      //   ],
      // });

      
      res.status(200).send({
        isError: false,
        message: "Find Hotels Success",
        data: findHotels,
      });
    } catch (error) {
      res.status(500).send({
        isError: true,
        message: error.message,
        data: null,
      });
    }
  },
};
