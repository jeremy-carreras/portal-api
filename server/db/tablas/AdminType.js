const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize.conf');

class AdminType extends Model {}

AdminType.init(
  {
    idAdminType: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    typeName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'AdminType',
    tableName: 'admintype',
    timestamps: false,
  }
);

module.exports = AdminType;
