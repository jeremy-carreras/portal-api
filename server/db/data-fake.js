require("../config/config");
const colors = require("colors");
const Admin = require("./tablas/Admin");
const SuperAdmin = require("./tablas/SuperAdmin");
const Teacher = require("./tablas/Teacher");
const Student = require("./tablas/Student");
const Subject = require("./tablas/Subject");
const Grade = require("./tablas/Grade");
const SchoolCycle = require("./tablas/SchoolCycle");
const Group = require("./tablas/Group");

const dataSuperAdmin = async () => {
  await SuperAdmin.create({
    firstName: "John",
    lastName: "Doe",
    secondLastName: "Smith",
    email: "john.doe@example.com",
    username: "johndoe",
    password: "password",
    insertedBy: "System",
    insertedDate: new Date(),
  });
  console.log("SuperAdmin data inserted successfully.".magenta);
};

const dataAdmin = async () => {
  await Admin.create({
    firstName: "Jane",
    lastName: "Doe",
    secondLastName: "Brown",
    email: "jane.doe@example.com",
    username: "janedoe",
    password: "password",
    insertedBy: "System",
    insertedDate: new Date(),
    isActive: true,
  });
  console.log("Admin data inserted successfully.".magenta);
};

const dataTeacher = async () => {
  await Teacher.create({
    firstName: "Michael",
    lastName: "Johnson",
    secondLastName: "Williams",
    email: "michael.johnson@example.com",
    username: "michaeljohnson",
    password: "password",
    insertedBy: "System",
    insertedDate: new Date(),
    isActive: true,
  });
  console.log("Teacher data inserted successfully.".magenta);
};

const dataGroup = async () => {
  await Group.create({
    name: "Group A",
    insertedBy: "System",
    insertedDate: new Date(),
    isActive: true,
  });
  console.log("Group data inserted successfully.".magenta);
};

const dataSchoolCycle = async () => {
  await SchoolCycle.create({
    name: "2024-2025",
    insertedBy: "System",
    insertedDate: new Date(),
    isActive: true,
  });
  console.log("SchoolCycle data inserted successfully.".magenta);
};

const dataStudent = async () => {
  await Student.create({
    firstName: "Emily",
    lastName: "Taylor",
    secondLastName: "Clark",
    email: "emily.taylor@example.com",
    username: "emilytaylor",
    password: "password",
    idGroup: 1, // Assuming idGroup exists
    insertedBy: "System",
    insertedDate: new Date(),
    isActive: true,
  });
  console.log("Student data inserted successfully.".magenta);
};

const dataSubject = async () => {
  await Subject.create({
    name: "Mathematics",
    idGroup: 1, // Assuming idGroup exists
    idSchoolCycle: 1, // Assuming idSchoolCycle exists
    idTeacher: 1, // Assuming idTeacher exists
    insertedBy: "System",
    insertedDate: new Date(),
    isActive: true,
  });
  console.log("Subject data inserted successfully.".magenta);
};

const dataGrade = async () => {
  await Grade.create({
    idStudent: 1, // Assuming idStudent exists
    idSubject: 1, // Assuming idSubject exists
    score: 90,
    insertedBy: "System",
    insertedDate: new Date(),
    isActive: true,
  });
  console.log("Grade data inserted successfully.".magenta);
};

const exec = async () => {
  await dataSuperAdmin();
  await dataAdmin();
  await dataTeacher();
  await dataSchoolCycle();
  await dataGroup();
  await dataStudent();
  await dataSubject();
  await dataGrade();
  console.log(
    "Fake data has been successfully installed in the database.".underline.bold
      .green
  );
  process.exit();
};

exec();
