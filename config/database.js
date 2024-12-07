const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('cleaning_service_db', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch((err) => console.error('Unable to connect:', err));

module.exports = sequelize;
