/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable require-jsdoc */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

const GroupServices = require('../services/group.services');

const { successResMsg } = require('../utils/libs/response');
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

  //   async addUserToGroup(req, res) {
  //     const group = await GroupServices.addUserToGroup(req.params.id, req.body);
  //     res.status(200).json(group);
  //   }

  //   async removeUserFromGroup(req, res) {
  //     const group = await GroupServices.removeUserFromGroup(req.params.id, req.body);
  //     res.status(200).json(group);
  //   }
}

module.exports = new GroupController();
