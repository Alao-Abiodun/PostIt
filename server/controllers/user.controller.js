/* eslint-disable no-console */
/* eslint-disable require-jsdoc */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

const UserServices = require('../services/user.services');

class UserController {
//   async getAll(req, res) {
//     const users = await UserServices.getAll();
//     res.status(200).json(users);
//   }

  //   async getById(req, res) {
  //     const user = await UserServices.getById(req.params.id);
  //     res.status(200).json(user);
  //   }

  async signUp(req, res) {
    try {
      const user = await UserServices.addUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async signIn(req, res) {
    try {
      const user = await UserServices.login(req.body);
      res.status(200).json(user);
    } catch (error) {
      console.log('message:', error.message);
      res.status(500).json({
        message: error.message,
      });
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
