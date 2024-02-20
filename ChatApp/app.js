const express = require("express"); //express로 서버를 만든다
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors"); //접근을 허가하기위한 cors
const app = express();
app.use(cors()); //접근을 허가하기 위한 cors 사용

mongoose
  .connect(process.env.DB)
  .then(() => console.log("connencted to database"));

module.exports = app
