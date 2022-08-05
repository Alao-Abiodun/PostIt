/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable require-jsdoc */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

const GroupServices = require('../services/group.services');

const { successResMsg, errorResMsg } = require('../utils/libs/response');
const AppError = require('../utils/libs/appError');

class GroupController {
  async createGroup(req, res, next) {
    try {
      const group = await GroupServices.createGroup(req.body);
      return successResMsg(res, 201, {
        message: 'Group created successfully',
        group,
      });
    } catch (error) {
      return next(new AppError(error.message, 500));
    }
  }

  async addUserToGroup(req, res, next) {
    try {
      const group = await GroupServices.addUserToGroup(req.body, req.params);
      if (group === 'User not Found') {
        return errorResMsg(res, 404, {
          message: 'User not found',
        });
      }
      if (group === 'Group not Found') {
        return errorResMsg(res, 404, {
          message: 'Group not found',
        });
      }
      return successResMsg(res, 201, {
        message: 'User added to group successfully',
        group,
      });
    } catch (error) {
      return next(new AppError(error, error.status));
    }
  }
}

module.exports = new GroupController();
