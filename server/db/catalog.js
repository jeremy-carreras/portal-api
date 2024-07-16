require("../config/config");
const colors = require("colors");
const AdminType = require("./tablas/AdminType");

const dataAdminType = async () => {
  await AdminType.bulkCreate([
    {
      typeName: "Superadmin",
      description: "Full access to all system features and settings.",
    },
    {
      typeName: "Admin",
      description: "Access to manage users and their profiles.",
    },
  ]);
  console.log("AdminType data inserted successfully.".magenta);
};

const exec = async () => {
  await dataAdminType();
  console.log(
    "AdminType data has been successfully installed in the database.".underline
      .bold.green
  );
  process.exit();
};

exec();
