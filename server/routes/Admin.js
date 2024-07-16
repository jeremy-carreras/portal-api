const express = require("express");
const app = express();
const getUsers = require("../controller/Admin/getUsers");
const getUser = require("../controller/Admin/getUser");
const addAdmin = require("../controller/Admin/addUser");
const updateAdmin = require("../controller/Admin/updateUser");

app.get(`/admin/users`, async (req, res) => {
  try {
    const data = await getUsers(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting admins: ", error);
    res.status(400).json({ message: error});
  }
});

app.get(`/admin/user`, async (req, res) => {
  try {
    const data = await getUser(req.query);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting admin: ", error);
    res.status(400).json({ message: error});
  }
});

app.post(`/admin/user`, async (req, res) => {
  try {
    const data = await addAdmin(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error creating admin: ", error);
    res.status(400).json({ message: error});
  }
});

app.put(`/admin/user`, async (req, res) => {
  try {
    const data = await updateAdmin(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error updating admin: ", error);
    res.status(400).json({ message: error });
  }
});

module.exports = app;
