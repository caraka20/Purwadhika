'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({kota, room, hotel_image, fasilitas_hotel}) {
      this.belongsTo(kota,{foreignKey: "kota_id"})
      this.hasMany(room, {foreignKey: "hotel_id"})
      this.belongsToMany(fasilitas_hotel, {through: "hotel_has_fasilitas", foreignKey: "hotel_id"})
      this.hasMany(hotel_image, {foreignKey: "hotel_id"})
    }
  }
  hotel.init({
    nama_hotel: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    bintang: DataTypes.INTEGER,
    telepon: DataTypes.STRING,
    createdAt : {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt : {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};