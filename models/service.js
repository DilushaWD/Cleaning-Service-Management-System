const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('service', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Service;