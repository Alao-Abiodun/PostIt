/* eslint-disable require-jsdoc */
/* eslint-disable lines-around-directive */
/* eslint-disable valid-jsdoc */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line strict
'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Message.init({
    messsage: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
    timestamps: true,
  });
  return Message;
};
