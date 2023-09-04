'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hotel_images', 
    [
      {
        id : 1,
        url: 'https://indonesiatraveler.id/wp-content/uploads/2020/01/oke11.jpg',
        hotel_id : 1
      },
      {
        id : 2,
        url: 'https://www.idnhotel.com/wp-content/uploads/2020/02/Hotel-Mewah.jpg',
        hotel_id : 2
      },
      {
        id : 3,
        url: 'https://hotelier.id/wp-content/uploads/2022/05/Hotel-Tentrem-Backyard.jpg',
        hotel_id : 3
      },
      {
        id : 4,
        url: 'https://hitput.com/wp-content/uploads/2019/04/Hotel-mewah-di-Bandung-dan-Jakarta-2.jpg',
        hotel_id : 4
      },
      {
        id : 5,
        url: 'https://kagama.co/wp-content/uploads/2020/01/PESONNA.jpg',
        hotel_id : 5
      },
      {
        id : 6,
        url: 'https://jenishotel.info/wp-content/uploads/2019/10/The-101-Yogyakarta-Tugu.jpg',
        hotel_id : 6
      },
      {
        id : 7,
        url: 'https://ik.imagekit.io/tvlk/blog/2020/01/hotel-termewah-di-Indonesia-2.2-Traveloka.jpg?tr=dpr-2,w-675',
        hotel_id : 7
      },
      {
        id : 8,
        url: 'https://vallet.id/wp-content/uploads/2020/01/Desain-Hotel-Mewah-Minimalis.jpg',
        hotel_id : 8
      },
      {
        id : 9,
        url: 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/04/12/pemilik-hotel-mewah-3642914358.jpg',
        hotel_id : 9
      },
      {
        id : 10,
        url: 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/02/10/2082199077.jpeg',
        hotel_id : 10
      },
      {
        id : 11,
        url: 'https://www.pinterpolitik.com/wp-content/uploads/2020/03/HI187350410.jpg',
        hotel_id : 1
      },
      {
        id : 12,
        url: 'https://phinemo.com/wp-content/uploads/2020/10/MENIKMATI-PESONA-YOGYAKARTA-DI-PESONNA-MALIOBORO-min.jpg',
        hotel_id : 2
      },
      {
        id : 13,
        url: 'https://cf.bstatic.com/images/hotel/max1280x900/196/196162179.jpg',
        hotel_id : 3
      },
      {
        id : 14,
        url: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/07/16/1624398793.jpg',
        hotel_id : 4
      },
      {
        id : 15,
        url: 'https://static.promediateknologi.id/crop/0x207:700x713/750x500/webp/photo/2023/06/16/hotel-2042893195.jpg',
        hotel_id : 5
      },
      {
        id : 16,
        url: 'https://www.blackxperience.com/assets/content/blackattitude/blackspot/11-hotel-mewah-tertua-13-raffles-hotel.jpg',
        hotel_id : 6
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
