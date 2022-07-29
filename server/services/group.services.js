/* eslint-disable no-useless-catch */
/* eslint-disable require-jsdoc */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
const { Group, User } = require('../../database/models/index');

class GroupService {
  async createGroup(data) {
    if (!data.name || !data.createdBy) {
      throw new Error('Name and createdBy are required');
    }
    return await Group.create(data);
  }

  //   async addUserToGroup(userId, groupId) {
  //     return await User.addGroup(userId, groupId);
  //   }

//   async removeUserFromGroup(userId, groupId) {
//     return await User.removeGroup(userId, groupId);
//   }
}

module.exports = new GroupService();
