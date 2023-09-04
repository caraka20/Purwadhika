'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hotels', 
    [
      {
        id : 1,
        nama_hotel: 'Hotel Harmoni',
        lokasi : "Jakarta Pusat",
        bintang : 5,
        telepon : 5823782,
        kota_id : 1
      },
      {
        id : 2,
        nama_hotel: 'Luminor Hotel',
        lokasi : "Jakrta Barat",
        bintang : 5,
        telepon : 238283782,
        kota_id : 1
      },
      {
        id : 3,
        nama_hotel: 'Ascott Jakarta',
        lokasi : "Jakarta Selatan",
        bintang : 5,
        telepon : 3532873,
        kota_id : 1
      },
      {
        id : 4,
        nama_hotel: 'Pullman Ciawi',
        lokasi : "Bogor Tengah",
        bintang : 5,
        telepon : 2747263,
        kota_id : 2
      },
      {
        id : 5,
        nama_hotel: 'Hotel Santika',
        lokasi : "Bogor Tengah",
        bintang : 4,
        telepon : 5235236,
        kota_id : 2
      },
      {
        id : 6,
        nama_hotel: 'Aston Sentul hotel',
        lokasi : "Bogor Tengah",
        bintang : 5,
        telepon : 63578267,
        kota_id : 2
      },
      {
        id : 7,
        nama_hotel: 'Ibis Bdget',
        lokasi : "Tangerang Kota",
        bintang : 5,
        telepon : 56723893,
        kota_id : 3
      },
      {
        id : 8,
        nama_hotel: 'De Green Hotel',
        lokasi : "Tangerang Selatan",
        bintang : 5,
        telepon : 3756272,
        kota_id : 3
      },
      {
        id : 9,
        nama_hotel: 'Swiss-Belhotel',
        lokasi : "BSD",
        bintang : 5,
        telepon : 5245221,
        kota_id : 3
      },
      {
        id : 10,
        nama_hotel: 'Amaroossa Grande',
        lokasi : "Bekasi Barat",
        bintang : 4,
        telepon : 3264625,
        kota_id : 4
      },
      {
        id : 11,
        nama_hotel: 'Swiss-Belhotel',
        lokasi : "Bekasi Timur",
        bintang : 5,
        telepon : 7648216,
        kota_id : 4
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};

