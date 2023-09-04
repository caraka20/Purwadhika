'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('fasilitas_hotels', 
      [
        {
          id : 1,
        fasilitas_hotel: 'Free wifi',
        icon: "ICON"
        },
        {
        id : 2,
        fasilitas_hotel: 'Restaurant',
        icon: "ICON"
        },
        {
          id : 3,
        fasilitas_hotel: 'Swimming Pool',
        icon: "ICON"
        },
        {
          id : 4,
        fasilitas_hotel: 'Fitness centre',
        icon: "ICON"
        },
        {
          id : 5,
        fasilitas_hotel: 'Parking Area',
        icon: "ICON"
        },
        {
          id : 6,
        fasilitas_hotel: 'Room Service',
        icon: "ICON"
        },
        {
          id : 7,
        fasilitas_hotel: 'charger mobil',
        icon: "ICON"
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
