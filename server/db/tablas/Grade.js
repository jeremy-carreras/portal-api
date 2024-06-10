const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize.conf');
const Student = require('./Student');
const Subject = require('./Subject');

class Grade extends Model {}

Grade.init(
  {
    idGrade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    idStudent: {
      type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: 'idStudent',
      },
      allowNull: false,
    },
    idSubject: {
      type: DataTypes.INTEGER,
      references: {
        model: Subject,
        key: 'idSubject',
      },
      allowNull: false,
    },
    score: {
      type: DataTypes.FLOAT,
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
    modelName: 'Grade',
    tableName: 'Grade',
    timestamps: false,
  }
);

// Definir las relaciones entre Grade, Student y Subject
Grade.belongsTo(Student, { foreignKey: 'idStudent' });
Grade.belongsTo(Subject, { foreignKey: 'idSubject' });

module.exports = Grade;
