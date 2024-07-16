const helperPath = "../../helper";
const { validateId } = require(`${helperPath}/validate`);
const Admin = require("../../db/tablas/Admin");

const admin = async (query) => {
  try {
    const idAdmin = validateId(query.idAdmin);
    return Admin.findOne({ where: { idAdmin } })
      .then((admin) => {
        if (!admin) {
          throw new Error("No admin found with that ID.");
        }
        return admin.dataValues;
      })
      .catch((error) => {
        let errorMessage = "Unknown error occurred";

        if (error.errors) {
          errorMessage = error.errors;
        } else if (error.message) {
          errorMessage = error.message;
        }

        return Promise.reject(errorMessage);
      });
  } catch (error) {
    return Promise.reject(error.message);
  }
};

module.exports = admin;
