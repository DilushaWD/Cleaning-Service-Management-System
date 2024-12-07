const sequelize = require('../config/database');
const User = require('./user');
const Service = require('./service');
const Booking = require('./booking');

// Sync the database
sequelize.sync({ force: true })
  .then(() => console.log('Database synced!'))
  .catch((err) => console.error('Error syncing database:', err));

module.exports = { sequelize, User, Service, Booking };
