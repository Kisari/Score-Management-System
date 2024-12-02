'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('scores', {
      sbd: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      toan: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ngu_van: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ngoai_ngu: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      vat_li: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      hoa_hoc: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      sinh_hoc: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      lich_su: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      dia_li: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      gdcd: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ma_ngoai_ngu: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('scores');
  }
};
