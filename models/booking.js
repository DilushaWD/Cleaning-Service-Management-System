const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Service = require('./service');

const Booking = sequelize.define('booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Associations
Booking.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',
});

Booking.belongsTo(Service, {
  foreignKey: 'service_id',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',
});

module.exports = Booking;
