/* eslint-disable require-jsdoc */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

const { User, Group } = require('../../database/models/index');

class UserService {
  async getAll() {
    return await User.findAll({
      include: [
        {
          model: Group,
          as: 'groups',
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      ],
    });
  }

  async getById(id) {
    return await User.findOne({
      where: { id },
      include: [
        {
          model: Group,
          as: 'groups',
          attributes: ['name'],
          through: {
            attributes: [],
          },
        }
      ]
    });
  }

  async create(user) {
    return await User.create(user);
  }

  async update(id, user) {
    return await User.update(user, {
      where: {
        id,
      },
    });
  }

  async delete(id) {
    return await User.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = new UserService();
