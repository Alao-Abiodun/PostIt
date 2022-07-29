/* eslint-disable no-useless-catch */
/* eslint-disable require-jsdoc */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

const { User, Group } = require('../../database/models/index');

class UserService {
//   async getAll() {
//     return await User.findAll({
//       include: [
//         {
//           model: Group,
//           as: 'groups',
//           attributes: ['name'],
//           through: {
//             attributes: [],
//           },
//         },
//       ],
//     });
//   }

  //   async getById(id) {
  //     return await User.findOne({
  //       where: { id },
  //       include: [
  //         {
  //           model: Group,
  //           as: 'groups',
  //           attributes: ['name'],
  //           through: {
  //             attributes: [],
  //           },
  //         }
  //       ]
  //     });
  //   }

  async addUser(data) {
    try {
      if (!data.username || !data.password || !data.email) {
        throw new Error('Missing required fields');
      }
      return await User.create(data);
    } catch (error) {
      throw error;
    }
  }

  async login(data) {
    try {
      if (!data.username || !data.password) {
        throw new Error('Username or password is missing');
      }
      return await User.findOne({
        where: {
          username: data.username,
          password: data.password,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  //   async update(id, user) {
  //     return await User.update(user, {
  //       where: {
  //         id,
  //       },
  //     });
  //   }

//   async delete(id) {
//     return await User.destroy({
//       where: {
//         id,
//       },
//     });
//   }
}

module.exports = new UserService();
