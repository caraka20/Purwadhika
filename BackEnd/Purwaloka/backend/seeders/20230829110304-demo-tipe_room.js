'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipe_rooms', 
    [
      {
        id : 1,
        nama_tipe: 'Singe Bed',
      },
      {
        id : 2,
        nama_tipe: 'Double Bed',
      },
      {
        id : 3,
        nama_tipe: 'Queen Bed'
      },
      {
        id : 4,
        nama_tipe: 'King Bed'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('tipe_rooms', null, {});
  }
};
