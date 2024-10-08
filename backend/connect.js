const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL

const connectDb = mongoose
  .connect(DB_URL)
  .then(console.log("mongoDb connected"));
