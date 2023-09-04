'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipe_room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({room}) {
      this.hasMany(room, {foreignKey: "tipe_room_id"})
    }
  }

  tipe_room.init({
    nama_tipe: DataTypes.STRING,
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
    modelName: 'tipe_room',
  });
  return tipe_room;
};