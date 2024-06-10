const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize.conf');
const Group = require('./Group');  // Asegúrate de ajustar la ruta según la ubicación del archivo Group.js

class Student extends Model {}

Student.init(
  {
    idStudent: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    secondLastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    idGroup: {
      type: DataTypes.INTEGER,
      references: {
        model: Group,
        key: 'idGroup',
      },
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
    modelName: 'Student',
    tableName: 'student',
    timestamps: false,
  }
);

// Definir la relación entre Student y Group
Student.belongsTo(Group, { foreignKey: 'idGroup' });

module.exports = Student;
