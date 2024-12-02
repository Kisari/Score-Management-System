'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const results = [];
    const chunkSize = 10000; // Number of rows per batch

    // Define the path to the CSV file
    const csvFilePath = path.join(__dirname, '..', 'diem_thi_thpt_2024.csv'); 

    // Read and parse the CSV file
    return new Promise((resolve, reject) => {
      fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => {
          // Prepare the data to insert
          results.push({
            sbd: data.sbd,
            toan: data.toan || null,
            ngu_van: data.ngu_van || null,
            ngoai_ngu: data.ngoai_ngu || null,
            vat_li: data.vat_li || null,
            hoa_hoc: data.hoa_hoc || null,
            sinh_hoc: data.sinh_hoc || null,
            lich_su: data.lich_su || null,
            dia_li: data.dia_li || null,
            gdcd: data.gdcd || null,
            ma_ngoai_ngu: data.ma_ngoai_ngu || null,
            createdAt: new Date(),
            updatedAt: new Date()
          });

          // Insert in batches when the chunk size is reached
          if (results.length >= chunkSize) {
            const batch = results.splice(0, chunkSize); // Get the batch of rows to insert
            queryInterface.bulkInsert('scores', batch)
              .then(() => {
                console.log(`Inserted ${batch.length} rows.`);
              })
              .catch((error) => {
                console.error('Error inserting batch:', error);
                reject(error);
              });
          }
        })
        .on('end', async () => {
          // Insert any remaining data that was not inserted in a batch
          if (results.length > 0) {
            await queryInterface.bulkInsert('scores', results);
            console.log(`Inserted remaining ${results.length} rows.`);
          }
          console.log('CSV data imported successfully.');
          resolve();
        })
        .on('error', (error) => {
          console.error('Error reading the CSV file:', error);
          reject(error);
        });
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('scores', null, {});
  }
};
