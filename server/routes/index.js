const express = require("express");
const app = express();

app.use(require('./Admin'));

module.exports = app;