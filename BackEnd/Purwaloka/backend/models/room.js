'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({room_image, hotel, booking, fasilitas_kamar, tipe_room}) {
      this.hasMany(room_image,{foreignKey: "room_id"})
      this.belongsTo(hotel, {foreignKey: "hotel_id"})
      this.hasMany(booking, {foreignKey: "room_id"})
      this.belongsToMany(fasilitas_kamar, {through: "room_has_fasilitas", foreignKey: "room_id"})
      this.belongsTo(tipe_room, {foreignKey: "tipe_room_id"})
    }
  }

  room.init({
    harga: DataTypes.INTEGER,
    total_room: DataTypes.INTEGER,
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
    modelName: 'room',
  });
  return room;
};