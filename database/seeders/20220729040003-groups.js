/* eslint-disable strict */
/* eslint-disable lines-around-directive */
/* eslint-disable no-unused-vars */

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Groups', [
      {
        name: 'Group 1',
        createdBy: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Group 2',
        createdBy: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Group 3',
        createdBy: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
