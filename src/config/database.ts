import { Dialect, Sequelize } from 'sequelize'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect || 'mysql'
const dbPassword = process.env.DB_PASSWORD || ''
const dbPort = process.env.DB_PORT

export const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  port: Number(dbPort),
  logging: false,
  dialectOptions: {
    connectTimeout: 100000,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
})

export const dbInit = async () => {
  try {
    await sequelizeConnection.authenticate()
    // await sequelizeConnection.sync({ alter: true })
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}