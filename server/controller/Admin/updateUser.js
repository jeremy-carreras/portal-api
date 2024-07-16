const helperPath = "../../helper";
const {
  validateId,
  validate,
  validateEmail,
  validateDate,
  validateBool,
} = require(`${helperPath}/validate`);
const { encrypt } = require(`${helperPath}/encrypt`);
const dbPath = "../../db/tablas";
const Admin = require(`${dbPath}/Admin`);

const admin = async (body) => {
  try {
    const idAdmin = validateId(body.idAdmin);
    const dataUpdate = {};

    return Admin.findOne({ where: { idAdmin } })
      .then((res) => {
        if (!res) throw new Error("No admin found with that ID.");
        if (body.firstName)
          dataUpdate.firstName = validate(body.firstName, "firstName");
        if (body.lastName)
          dataUpdate.lastName = validate(body.lastName, "lastName");
        if (body.secondLastName)
          dataUpdate.secondLastName = validate(
            body.secondLastName,
            "secondLastName"
          );
        if (body.email) dataUpdate.email = validateEmail(body.email, "email");
        if (body.username)
          dataUpdate.username = validate(body.username, "username");
        if (body.password)
          dataUpdate.password = encrypt(validate(body.password, "password"));
        if (body.insertedBy)
          dataUpdate.insertedBy = validate(body.insertedBy, "insertedBy");
        if (body.insertedDate)
          dataUpdate.insertedDate = validateDate(
            body.insertedDate,
            "insertedDate"
          );
        if (body.isActive)
          dataUpdate.isActive = validateBool(body.isActive, "isActive");

        return Admin.update(dataUpdate, { where: { idAdmin } });
      })
      .then((res) => {
        if (!res)
          throw new Error("Could not update the admin in the database.");
        return {
          message: "Admin updated successfully.",
        };
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
