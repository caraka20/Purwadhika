'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user, room}) {
      this.belongsTo(user, {foreignKey: "user_id"})
      this.belongsTo(room, {foreignKey: "room_id"})
    }
  }
  booking.init({
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE,
    status: DataTypes.STRING,
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
    modelName: 'booking',
  });
  return booking;
};