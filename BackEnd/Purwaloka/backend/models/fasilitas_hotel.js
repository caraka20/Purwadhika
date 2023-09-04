'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fasilitas_hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({hotel}) {
      this.belongsToMany(hotel, {through: "hotel_has_fasilitas", foreignKey: "hotel_has_fasilitas"})
    }
  }

  fasilitas_hotel.init({
    fasilitas_hotel: DataTypes.STRING,
    icon: DataTypes.STRING,
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
    modelName: 'fasilitas_hotel',
  });
  return fasilitas_hotel;
};