const moment = require('moment');
const validator = require('validator');

const notValid = (field) => {
  throw new Error(`${field} is not valid.`);
};

const isMissing = (variable, field) => {
  if (!variable) throw new Error(`Missing ${field}.`);
};

const alreadyExists = (field) => {
  throw new Error(`${field} already exists.`);
};

const validate = (text, field, length) => {
  isMissing(text, field);
  if (typeof text !== 'string' || (length && text.length > length))
    notValid(field);
  return text;
};

const validateId = (id) => {
  let field = 'The id';

  isMissing(id, field);
  if (typeof id === 'number') id = id.toString();
  if (typeof id !== 'string' || !validator.isNumeric(id, { no_symbols: true }))
    notValid(field);
  return Number(id);
};

const validateEmail = (email) => {
  let field = 'The email';

  isMissing(email, field);
  if (typeof email !== 'string' || !validator.isEmail(email)) notValid(field);
  return email;
};

const hasSpecialCharacters = (char) => {
  const charset = [
    ' ',
    '.',
    '-',
    ',',
    '/',
    '#',
    '?',
    '¿',
    ':',
    ';',
    '"',
    "'",
    '_',
    '%',
    '\n',
  ];

  for (let i = 0; i < charset.length; i++) if (charset[i] === char) return true;
  return false;
};

const validateText = (text, field, length) => {
  isMissing(text, field);
  if (typeof text !== 'string' || text.length > length) notValid(field);
  for (let i = 0; i < text.length; i++) {
    if (hasSpecialCharacters(text[i])) continue;
    if (!validator.isAlpha(text[i], 'es-ES')) notValid(field);
  }
  return text;
};

const validateAlphanumeric = (text, field, length) => {
  isMissing(text, field);
  if (typeof text !== 'string' || text.length > length) notValid(field);
  for (let i = 0; i < text.length; i++) {
    if (hasSpecialCharacters(text[i])) continue;
    if (!validator.isAlphanumeric(text[i], 'es-ES')) notValid(field);
  }
  return text;
};

const validateAccountNumber = (accountNumber) => {
  let field = 'The account number';

  isMissing(accountNumber, field);
  if (
    typeof accountNumber !== 'string' ||
    !validator.isNumeric(accountNumber, { no_symbols: true }) ||
    accountNumber.length > 9
  )
    notValid(field);
  return accountNumber;
};

const validateDate = (date) => {
  let field = 'The date';
  let momentDate = moment(date);

  isMissing(date, field);
  if (!momentDate.isValid()) notValid(field);
  return momentDate;
};

const validateNumber = (number, makeNumber = false, length) => {
  let field = 'The number';

  isMissing(number, field);
  if (
    typeof number !== 'string' ||
    !validator.isNumeric(number, { no_symbols: true }) ||
    (length && number.length > length)
  )
    notValid(field);
  if (makeNumber) return Number(number);
  return number;
};

const validateAccessibility = (validUsers = [], userType) => {
  for (let i = 0; i < validUsers.length; i++)
    if (userType === validUsers[i]) return;
  throw new Error('This user is not allowed to use this API endpoint.');
};

const isEmptyObject = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

module.exports = {
  validate,
  notValid,
  alreadyExists,
  isMissing,
  validateEmail,
  validateId,
  validateText,
  validateAlphanumeric,
  validateAccountNumber,
  validateDate,
  validateNumber,
  validateAccessibility,
  isEmptyObject,
};
