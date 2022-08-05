/* eslint-disable no-console */
/* eslint-disable no-useless-catch */
/* eslint-disable require-jsdoc */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
const { Group, User, UserGroup } = require('../../database/models/index');
const AppError = require('../utils/libs/appError');  // eslint-disable-line

class GroupService {
  async createGroup(data) {
    try {
      if (!data.name || !data.createdBy) {
        throw new Error('Name and createdBy are required');
      }
      return await Group.create(data);
    } catch (error) {
      throw new AppError(error.message, 500);
    }
  }

  async addUserToGroup(bodyData, paramsData) {
    try {
      const { userId } = bodyData;
      const { id } = paramsData;
      if (!userId || !id) {
        throw new AppError('UserId and GroupId are required');
      }
      const user = await User.findByPk(userId);
      if (!user) {
        return 'User not Found';
      }
      const group = await Group.findByPk(id);
      if (!group) {
        return 'Group not Found';
      }
      const userGroup = await UserGroup.create({
        user_id: userId,
        group_id: id,
      });
      return userGroup;
    } catch (error) {
      throw new AppError(error.message, 500);
    }
  }
}

module.exports = new GroupService();
