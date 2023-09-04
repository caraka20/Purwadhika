'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fasilitas_kamar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({room}) {
      this.belongsToMany(room, {through: "room_has_fasilitas", foreignKey: "fasilitas_kamar_id"})
    }
  }
  fasilitas_kamar.init({
    fasilitas_kamar: DataTypes.STRING,
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
    modelName: 'fasilitas_kamar',
  });
  return fasilitas_kamar;
};
