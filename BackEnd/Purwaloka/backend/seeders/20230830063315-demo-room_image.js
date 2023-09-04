'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('room_images', 
    [
      {
        id : 1,
        room_id : 1,
        url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlp7942G2cNP86ioBGPLUcyrlNlm-lElH0vw&usqp=CAU',
      },
      {
        id : 2,
        room_id : 2,
        url : 'https://images.genpi.co/resize/1280x860-100/uploads/banten/arsip/normal/2023/01/13/hotel-murah-bintang-3-di-kabupaten-tangerang-provinsi-bante-jrae.webp',
      },
      {
        id : 3,
        room_id : 3,
        url : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tiket.com%2Fhotel%2Findonesia%2Fkala-hotel-412001639974610153&psig=AOvVaw2P7H8raNjGiTytP24zwlcF&ust=1693464155237000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLi_id3jg4EDFQAAAAAdAAAAABBB',
      },
      {
        id : 4,
        room_id : 4,
        url : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fid%2Fkala-semarang.id.html&psig=AOvVaw2P7H8raNjGiTytP24zwlcF&ust=1693464155237000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLi_id3jg4EDFQAAAAAdAAAAABBJ',
      },
      {
        id : 5,
        room_id : 5,
        url : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/fb/91/13/kala-hotel.jpg?w=700&h=-1&s=1',
      },
      {
        id : 6,
        room_id : 6,
        url : 'https://cdn0-production-images-kly.akamaized.net/gnfLn-zEh6648njoHQc8blsixfU=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3386715/original/094552600_1614241094-Double_Tree_Jakarta.jpg',
      },
      {
        id : 7,
        room_id : 7,
        url : 'https://img.inews.co.id/media/1200/files/inews_new/2018/09/12/the_loren.jpg',
      },
      {
        id : 8,
        room_id : 8,
        url : 'https://alacasa.id/lkgallery/teaser/Atlantis-The-Palm-Dubai-3_49_20210613161123I4qugn.jpg',
      },
      {
        id : 9,
        room_id : 9,
        url : 'https://asset.kompas.com/crops/tV9cKika3m_y1Kpo5Kla3xIWdao=/192x128:1728x1152/750x500/data/photo/2021/07/21/60f83f0d62fea.jpg',
      },
      {
        id : 10,
        room_id : 10,
        url : 'https://storage.googleapis.com/finansialku_media/wordpress_media/2019/06/Intip-10-Hotel-di-Jakarta-yang-Super-Mewah-Ratusan-Juta-01-Finansialku.jpg',
      },
      {
        id : 11,
        room_id : 1,
        url : 'https://www.saniharto.com/assets/gallery/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tvjpg.jpeg',
      },
      {
        id : 12,
        room_id : 1,
        url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlp7942G2cNP86ioBGPLUcyrlNlm-lElH0vw&usqp=CAU',
      },
      {
        id : 13,
        room_id : 2,
        url : 'https://asset-a.grid.id/crop/0x0:0x0/750x500/photo/grid/original/31379_kamar-tidur-hotel-mulia-senayan.jpg',
      },
      {
        id : 14,
        room_id : 3,
        url : 'https://edupaint.com/images/stories/Artikel/2014/2014_10/Edupaint%2020141011%20Art07%20IMG03%20interior-kamar-tidur-dengan-warna-warna-coklat.jpg',
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
