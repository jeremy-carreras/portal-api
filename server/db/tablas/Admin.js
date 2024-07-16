const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/sequelize.conf");
const AdminType = require("./AdminType"); // Importar el modelo AdminType

class Admin extends Model {}

Admin.init(
  {
    idAdmin: {
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
    idAdminType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: AdminType,
        key: "idAdminType",
      },
    },
  },
  {
    sequelize,
    modelName: "Admin",
    tableName: "admin",
    timestamps: false,
  }
);

Admin.belongsTo(AdminType, { foreignKey: "idAdminType" });

module.exports = Admin;
