'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rooms', 
    [
      {
        id : 1,
        harga : 200000,
        total_room : 20,
        hotel_id : 1,
        tipe_room_id : 1
      },
      {
        id : 2,
        harga : 100000,
        total_room : 10,
        hotel_id : 1,
        tipe_room_id : 1
      },
      {
        id : 3,
        harga : 200000,
        total_room : 20,
        hotel_id : 2,
        tipe_room_id : 2
      },
      {
        id : 4,
        harga : 200000,
        total_room : 10,
        hotel_id : 2,
        tipe_room_id : 3
      },
      {
        id : 5,
        harga : 200000,
        total_room : 20,
        hotel_id : 3,
        tipe_room_id : 2
      },
      {
        id : 6,
        harga : 200000,
        total_room : 10,
        hotel_id : 3,
        tipe_room_id : 4
      },
      {
        id : 7,
        harga : 200000,
        total_room : 20,
        hotel_id : 4,
        tipe_room_id : 1
      },
      {
        id : 8,
        harga : 200000,
        total_room : 10,
        hotel_id : 4,
        tipe_room_id : 2
      },
      {
        id : 9,
        harga : 200000,
        total_room : 20,
        hotel_id : 5,
        tipe_room_id : 3
      },
      {
        id : 10,
        harga : 200000,
        total_room : 10,
        hotel_id : 5,
        tipe_room_id : 3
      },
      {
        id : 11,
        harga : 200000,
        total_room : 20,
        hotel_id : 6,
        tipe_room_id : 4
      },
      {
        id : 12,
        harga : 200000,
        total_room : 10,
        hotel_id : 6,
        tipe_room_id : 2
      },

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
