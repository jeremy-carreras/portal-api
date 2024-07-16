const bcrypt = require('bcrypt');
const validate = require('./validate');
require('../config/config');

const compare = (password, dbPassword) => {
  let field = 'password';

  validate.missingField(password, field);
  if (typeof password !== 'string') validate.invalidField(field);
  if (!bcrypt.compareSync(password, dbPassword))
    throw new Error('Invalid username or password.');
  return true;
};

const encrypt = (password) => {
  let field = 'password';

  validate.missingField(password, field);
  if (typeof password !== 'string') validate.invalidField(field);
  return bcrypt.hashSync(password, Number(process.env.SALT_ROUNDS));
};

const generatePassword = () => {
  let length = 8;
  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';

  for (let i = 0, n = charset.length; i < length; ++i)
    password += charset.charAt(Math.floor(Math.random() * n));
  return password;
};

module.exports = { compare, encrypt, generatePassword };
