/* eslint-disable lines-around-directive */
/* eslint-disable valid-jsdoc */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line strict
'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Group, {
        through: 'UserGroup',
        as: 'groups',
        foreignKey: 'user_id',
      });

      User.hasMany(models.Message, {
        as: 'messages',
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
  });
  return User;
};
