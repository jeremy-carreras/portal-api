const helperPath = "../../helper";
const {
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
    const firstName = validate(body.firstName, "firstName");
    const lastName = validate(body.lastName, "lastName");
    const secondLastName =
      body.secondLastName ??
      (validate(body.secondLastName, "secondLastName") || "");
    const email = validateEmail(body.email, "email");
    const username = validate(body.username, "username");
    const password = validate(body.password, "password");
    const insertedBy = validate(body.insertedBy, "insertedBy");
    const insertedDate = validateDate(body.insertedDate, "insertedDate");
    const isActive = validateBool(body.isActive, "isActive");

    return Admin.create({
      firstName,
      lastName,
      secondLastName,
      email,
      username,
      password: encrypt(password),
      insertedBy,
      insertedDate,
      isActive,
    })
      .then((res) => {
        if (!res)
          throw new Error("Could not insert the admin in the database.");
        delete res.dataValues.password;
        return {
          message: "Admin registered successfully.",
          data: res,
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
