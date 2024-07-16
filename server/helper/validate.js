const moment = require("moment");
const validator = require("validator");

const invalidField = (field) => {
  throw new Error(`${field} is not valid.`);
};

const missingField = (variable, field) => {
  if (!variable) throw new Error(`Missing ${field}.`);
};

const alreadyExists = (field) => {
  throw new Error(`${field} already exists.`);
};

const validate = (value, field, length) => {
  missingField(value, field);
  if (typeof value !== "string" || (length && value.length > length))
    invalidField(field);
  return value;
};

const validateId = (id) => {
  let field = "The ID";

  missingField(id, field);
  if (typeof id === "number") id = id.toString();
  if (typeof id !== "string" || !validator.isNumeric(id, { no_symbols: true }))
    invalidField(field);
  return Number(id);
};

const validateEmail = (email) => {
  let field = "The email";

  missingField(email, field);
  if (typeof email !== "string" || !validator.isEmail(email))
    invalidField(field);
  return email;
};

const validateBool = (value, field) => {
  if (value === "" || value === null) throw new Error(`Missing ${field}.`);

  if (typeof value !== "boolean") invalidField(field);
  return value;
};

const hasSpecialCharacters = (char) => {
  const charset = [
    " ",
    ".",
    "-",
    ",",
    "/",
    "#",
    "?",
    "¿",
    ":",
    ";",
    '"',
    "'",
    "_",
    "%",
    "\n",
  ];

  for (let i = 0; i < charset.length; i++) if (charset[i] === char) return true;
  return false;
};

const validateText = (text, field, length) => {
  missingField(text, field);
  if (typeof text !== "string" || text.length > length) invalidField(field);
  for (let i = 0; i < text.length; i++) {
    if (hasSpecialCharacters(text[i])) continue;
    if (!validator.isAlpha(text[i], "es-ES")) invalidField(field);
  }
  return text;
};

const validateAlphanumeric = (text, field, length) => {
  missingField(text, field);
  if (typeof text !== "string" || text.length > length) invalidField(field);
  for (let i = 0; i < text.length; i++) {
    if (hasSpecialCharacters(text[i])) continue;
    if (!validator.isAlphanumeric(text[i], "es-ES")) invalidField(field);
  }
  return text;
};

const validateAccountNumber = (accountNumber) => {
  let field = "The account number";

  missingField(accountNumber, field);
  if (
    typeof accountNumber !== "string" ||
    !validator.isNumeric(accountNumber, { no_symbols: true }) ||
    accountNumber.length > 9
  )
    invalidField(field);
  return accountNumber;
};

const validateDate = (date, field) => {
  let momentDate = moment(date);

  missingField(date, field);
  if (!momentDate.isValid()) invalidField(field);
  return momentDate;
};

const validateNumber = (number, makeNumber = false, length) => {
  let field = "The number";

  missingField(number, field);
  if (
    typeof number !== "string" ||
    !validator.isNumeric(number, { no_symbols: true }) ||
    (length && number.length > length)
  )
    invalidField(field);
  if (makeNumber) return Number(number);
  return number;
};

const validateAccessibility = (validUsers = [], userTypeId) => {
  for (let i = 0; i < validUsers.length; i++)
    if (userTypeId === validUsers[i]) return;
  throw new Error("This user is not authorized to access this API endpoint.");
};

const isEmptyObject = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

module.exports = {
  validate,
  invalidField,
  alreadyExists,
  missingField,
  validateEmail,
  validateBool,
  validateId,
  validateText,
  validateAlphanumeric,
  validateAccountNumber,
  validateDate,
  validateNumber,
  validateAccessibility,
  isEmptyObject,
};
