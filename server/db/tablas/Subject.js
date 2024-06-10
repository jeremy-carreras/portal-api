const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize.conf');
const Group = require('./Group');
const SchoolCycle = require('./SchoolCycle');
const Teacher = require('./Teacher');

class Subject extends Model {}

Subject.init(
  {
    idSubject: {
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
    idGroup: {
      type: DataTypes.INTEGER,
      references: {
        model: Group,
        key: 'idGroup',
      },
      allowNull: false,
    },
    idSchoolCycle: {
      type: DataTypes.INTEGER,
      references: {
        model: SchoolCycle,
        key: 'idSchoolCycle',
      },
      allowNull: false,
    },
    idTeacher: {
      type: DataTypes.INTEGER,
      references: {
        model: Teacher,
        key: 'id',
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
    modelName: 'Subject',
    tableName: 'subject',
    timestamps: false,
  }
);

// Definir las relaciones entre Subject, Group, SchoolCycle y Teacher
Subject.belongsTo(Group, { foreignKey: 'idGroup' });
Subject.belongsTo(SchoolCycle, { foreignKey: 'idSchoolCycle' });
Subject.belongsTo(Teacher, { foreignKey: 'idTeacher' });

module.exports = Subject;
