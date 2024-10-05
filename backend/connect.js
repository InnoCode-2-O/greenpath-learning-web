const mongoose = require("mongoose");

const connectDb = mongoose.connect("mongodb://localhost:27017/greenpath").then(console.log("mongoDb connected"))