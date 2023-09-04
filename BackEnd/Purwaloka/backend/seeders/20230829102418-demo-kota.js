'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('kota', 
    [
      {
        id : 1,
        nama_kota: 'Jakarta',
      },
      {
        id : 2,
        nama_kota: 'Bogor',
      },
      {
        id : 3,
        nama_kota: 'Tangerang'
      },
      {
        id : 4,
        nama_kota: 'Bekasi'
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
