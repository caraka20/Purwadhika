'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fasilitas_kamars', 
    [
      {
        id : 1,
        fasilitas_kamar: 'TV',
        icon : "ICON"
      },
      {
        id : 2,
        fasilitas_kamar: 'AC',
        icon : "ICON"
      },
      {
        id : 3,
        fasilitas_kamar: 'Telepon',
        icon : "ICON"
      },
      {
        id : 4,
        fasilitas_kamar: 'Meja Kerja',
        icon : "ICON"
      },
      {
        id : 5,
        fasilitas_kamar: 'Pengering Pakaian',
        icon : "ICON"
      },
      {
        id : 6,
        fasilitas_kamar: 'Lemari:',
        icon : "ICON"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
