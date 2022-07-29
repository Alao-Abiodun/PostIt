/* eslint-disable no-console */
/* eslint-disable require-jsdoc */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

const UserServices = require('../services/user.services');

const { successResMsg } = require('../utils/libs/response');
const AppError = require('../utils/libs/appError');

class UserController {
//   async getAll(req, res) {
//     const users = await UserServices.getAll();
//     res.status(200).json(users);
//   }

  //   async getById(req, res) {
  //     const user = await UserServices.getById(req.params.id);
  //     res.status(200).json(user);
  //   }

  async signUp(req, res, next) {
    try {
      const user = await UserServices.addUser(req.body);
      return successResMsg(res, 201, {
        message: 'User created successfully',
        user,
      });
    } catch (error) {
      return next(new AppError(error.message, 500));
    }
  }

  async signIn(req, res, next) {
    try {
      const user = await UserServices.login(req.body);
      return successResMsg(res, 200, {
        message: 'User logged in successfully',
        user,
      });
    } catch (error) {
      return next(new AppError(Error, error.status));
    }
  }

  //   async update(req, res) {
  //     const user = await UserServices.update(req.params.id, req.body);
  //     res.status(200).json(user);
  //   }

//   async delete(req, res) {
//     const user = await UserServices.delete(req.params.id);
//     res.status(200).json(user);
//   }
}

module.exports = new UserController();
