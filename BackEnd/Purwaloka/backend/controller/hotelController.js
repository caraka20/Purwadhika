const { Op } = require("sequelize");
const db = require("../models");
const { sequelize } = require("../models");
const {deleteFiles} = require("../helper/deleteFiles")
// CiBatteryFull
module.exports = {
  search: async (req, res) => {
    try {
      const { nama_kota, check_in, check_out } = req.query;

      const findHotels = await db.hotel.findAll({
      attributes: ["id","nama_hotel", "kota_id",
      [sequelize.col("nama_kota"),"nama_kota"],
      [sequelize.fn("MIN", sequelize.col("harga")), "minPrice"]
      ],
        include: [
          {
            model: db.hotel_image,
            attributes: ["url"]
          },
          {
            model: db.room,
            attributes: [[sequelize.fn('SUM', sequelize.col('total_room')), 'totalRoom']],
          },
          {
            model: db.kota,
            attributes: [],
            where: { nama_kota: nama_kota },
          },
        ],
        group: ["hotel.id"],
      });
      // console.log(findHotels[0]);

      const sumRoom = await db.hotel.findAll(
        {   
            attributes: ['nama_hotel', 'kota_id'], 
            include: [
                {
                    model: db.room, 
                    attributes: [[sequelize.fn('SUM', sequelize.col('total_room')), 'totalRoom']]
                },
                {
                    model: db.kota, 
                    attributes: ['nama_kota'],
                    where: {nama_kota: nama_kota}, 
                }
            ],
            group: ['hotel.id']
        }
    )
    const findBooking = await db.booking.findAll({
        include: [
            {
                model: db.room, 
                attributes: ['hotel_id']
            }
        ],
        where: {
            [Op.or]: [{
                check_in: {
                    [Op.between]: [check_in, check_out]
                }
            },{
                check_out: {
                    [Op.between]: [check_in, check_out]
                }
            }]
        }
    })
    // console.log(findBooking);

    // findHotels.forEach((value, index) => {
    //     findReservations.forEach((val, idx) => {
    //         console.log('Id Hotel')
    //         console.log(value.dataValues.id)
    //         console.log(val.dataValues.hotel_room.hotels_id)
    //         if(value.dataValues.id === val.dataValues.hotel_room.hotels_id){
    //             value.dataValues.totalRoom-= val.dataValues.total_room
    //         }
    //     })
    // })

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
        data: findBooking,
      });
    } catch (error) {
      res.status(500).send({
        isError: true,
        message: error.message,
        data: null,
      });
    }
  },

  createHotel : async (req, res, next) => {
    const t = await sequelize.transaction()
    try {
        const data = JSON.parse(req.body.data)
        const createdHotel = await db.hotel.create({...data}, {transaction: t})

        const dataImage = req.files.images.map(value => {
            return {url: value.path, hotel_id: createdHotel.id}
        })
        await db.hotel_image.bulkCreate(dataImage, {transaction: t})

        await t.commit()
        res.status(201).send({
            isError: false, 
            message: 'Create Hotel Success', 
            data: null
        })

    } catch (error) {
        deleteFiles(req.files)
        await t.rollback() 
        next(error)
    }
  },

  updateImage : async (req, res) => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  }
};

/**
  1. cari id image nya,
  2. url/pqth nya nanti buat nge delete.
  3. jalanin fungsi uploud 
  4. edit di database

 */