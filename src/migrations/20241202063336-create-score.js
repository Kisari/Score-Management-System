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

    //add index for all fields
    await queryInterface.addIndex('scores', ['toan']);
    await queryInterface.addIndex('scores', ['ngu_van']);
    await queryInterface.addIndex('scores', ['ngoai_ngu']);
    await queryInterface.addIndex('scores', ['vat_li']);
    await queryInterface.addIndex('scores', ['hoa_hoc']);
    await queryInterface.addIndex('scores', ['sinh_hoc']);
    await queryInterface.addIndex('scores', ['lich_su']);
    await queryInterface.addIndex('scores', ['dia_li']);
    await queryInterface.addIndex('scores', ['gdcd']);
    await queryInterface.addIndex('scores', ['ma_ngoai_ngu']);
    // await queryInterface.addIndex('scores', ['toan', 'vat_li', 'hoa_hoc']);
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('scores');
  }
};
