'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      data_nascimento: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      nome_responsavel: {
        type: Sequelize.STRING
      },
      telefone_responsavel: {
        type: Sequelize.STRING
      },
      materials_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Materials',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};