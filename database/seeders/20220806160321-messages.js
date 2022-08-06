/* eslint-disable strict */
/* eslint-disable lines-around-directive */
/* eslint-disable no-unused-vars */

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Messages', [
      {
        message: 'Hello World',
        user_id: 1,
        group_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        message: 'Hello World',
        user_id: 2,
        group_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        message: 'Hello World',
        user_id: 3,
        group_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Messages', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
