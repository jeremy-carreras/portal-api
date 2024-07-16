const dotenv = require('dotenv');
const colors = require('colors');
let result = {};

try {
  result = dotenv.config();
  if (result.error) throw result.error;
  console.log('The .env file has been loaded successfully.'.underline.bold.cyan);
} catch (error) {
  console.log('The .env file failed to load.'.underline.bold.red);
}
