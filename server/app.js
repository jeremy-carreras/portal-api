require('./config/config');
const colors = require('colors');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API'));

app.use(require('./routes/index'));

app.listen(Number(process.env.PORT), () =>
  console.log(
    `API running in port: ${process.env.PORT}`.rainbow
  )
);