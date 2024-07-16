const Admin = require("../../db/tablas/Admin");

const admin = async () => {
  return Admin.findAll()
    .then((admins) => {
      if (!admins || admins.length === 0) {
        throw new Error("No admins found.");
      }
      return admins.map((admin) => admin.dataValues);
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
};

module.exports = admin;
