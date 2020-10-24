'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
          firstName: 'Stacey',
          lastName: 'Graham',
          email: 'sgraham1106@gmail.com',
          gitHubID: null,
          gitHubUsername: "",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        firstName: 'Marc',
        lastName: 'Davis',
        email: 'num1balla@gmail.com',
        gitHubID: null,
        gitHubUsername: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Joyce',
        lastName: 'Davis',
        email: 'joyd01@gmail.com',
        gitHubID: null,
        gitHubUsername: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }  
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
  }
};
