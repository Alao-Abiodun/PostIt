/* eslint-disable require-jsdoc */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

const UserServices = require('../services/user.services');

class UserController {
  async getAll(req, res) {
    const users = await UserServices.getAll();
    res.status(200).json(users);
  }

  async getById(req, res) {
    const user = await UserServices.getById(req.params.id);
    res.status(200).json(user);
  }

  async create(req, res) {
    const user = await UserServices.create(req.body);
    res.status(201).json(user);
  }

  async update(req, res) {
    const user = await UserServices.update(req.params.id, req.body);
    res.status(200).json(user);
  }

  async delete(req, res) {
    const user = await UserServices.delete(req.params.id);
    res.status(200).json(user);
  }
}

module.exports = new UserController();
