const express = require("express");
require("./connect");
const cors = require("cors");
// const postUrl = require("./Db/routes/user")
const User = require("./models/user");
const { default: axios } = require("axios");
require("dotenv").config();
const quizRouter = require("./routes/quiz");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("app is working");
});
app.use(express.json()); //middleware for form data
app.post("/register", async (req, res) => {
  console.log(req.body);
  const insert = new User(req.body);
  let result = await insert.save();
  // res.send("Hogya send to database")
  // you can't use 2 res.send at a single req
  // res.send({message:"this is from data base",...req.body})
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    const result = await User.findOne(req.body).select("-password"); //this .select is used for removing password from that json string. && it is applicable for findOne.
    // note
    // diff bw find(returns : array of objects toh agr kuch nhi milega toh [] ye return krega) and findOne(returns one objects .ie document in mongoDb)
    if (result) {
      res.send(result);
    } else {
      res.send({ result: "user not found" });
    }
  } else {
    res.send({ result: "Invalid credentials" });
  }
});
app.use("/quiz", quizRouter);

quizRouter;

app.listen(5000);
