import * as fs from 'fs';
import * as path from 'path';
import { Sequelize,  DataTypes } from 'sequelize';
import { sequelizeConnection } from '../config/database'; // Import the new sequelize connection

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db: any = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file)).default(sequelizeConnection, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelizeConnection;
db.Sequelize = Sequelize;

export default db;
