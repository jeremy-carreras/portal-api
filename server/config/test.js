const sequelize = require('./sequelize.conf');
require('colors');

sequelize
  .authenticate()
  .then(() => {
    console.log('Successfully connected to the database.'.green);
    process.exit();
  })
  .catch((err) => {
    console.error('An error occurred while connecting to the database: '.red, err);
    process.exit();
  });
