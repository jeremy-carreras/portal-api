require('../config/config');
const colors = require('colors');
const Admin = require('./tablas/Admin');
const SuperAdmin = require('./tablas/SuperAdmin');
const Teacher = require('./tablas/Teacher');
const Student = require('./tablas/Student');
const Subject = require('./tablas/Subject');
const Grade = require('./tablas/Grade');
const SchoolCycle = require('./tablas/SchoolCycle');
const Group = require('./tablas/Group');

const drop = async () => {
  console.log('\nStep 1) Uninstalling the database.'.bold.blue);

  await Admin.drop();
  console.log('The Admin table was uninstalled successfully.'.magenta);
  await SuperAdmin.drop();
  console.log('The SuperAdmin table was uninstalled successfully.'.magenta);
  await Teacher.drop();
  console.log('The Teacher table was uninstalled successfully.'.magenta);
  await Student.drop();
  console.log('The Student table was uninstalled successfully.'.magenta);
  await Subject.drop();
  console.log('The Subject table was uninstalled successfully.'.magenta);
  await Grade.drop();
  console.log('The Grade table was uninstalled successfully.'.magenta);
  await SchoolCycle.drop();
  console.log('The SchoolCycle table was uninstalled successfully.'.magenta);
  await Group.drop();
  console.log('The Group table was uninstalled successfully.'.magenta);
};

const sync = async () => {
  console.log('\nStep 2) Installing the database.'.bold.blue);

  await Admin.sync();
  console.log('The Admin table was installed successfully.'.magenta);
  await SuperAdmin.sync();
  console.log('The SuperAdmin table was installed successfully.'.magenta);
  await Teacher.sync();
  console.log('The Teacher table was installed successfully.'.magenta);
  await Student.sync();
  console.log('The Student table was installed successfully.'.magenta);
  await Subject.sync();
  console.log('The Subject table was installed successfully.'.magenta);
  await Grade.sync();
  console.log('The Grade table was installed successfully.'.magenta);
  await SchoolCycle.sync();
  console.log('The SchoolCycle table was installed successfully.'.magenta);
  await Group.sync();
  console.log('The Group table was installed successfully.'.magenta);
};

const exe = async () => {
  await drop();
  await sync();
  console.log(
    '\nThe database has been successfully installed.\n'.underline.bold.green
  );

  process.exit();
};

exe();
