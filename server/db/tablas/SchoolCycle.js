const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize.conf');

class SchoolCycle extends Model {}

SchoolCycle.init(
  {
    idSchoolCycle: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    insertedBy: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    insertedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'SchoolCycle',
    tableName: 'schoolcycle',
    timestamps: false,
  }
);

module.exports = SchoolCycle;
