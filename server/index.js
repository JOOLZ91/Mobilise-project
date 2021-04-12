const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const loginRouter = require("./loginRout");

// Connecting to database

mongoose.connect(
  process.env.DB_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    !err ? console.log("Connected to db") : console.log(err);
  }
);

//Middlewares

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());

// Route

app.use("/login", loginRouter);

app.listen(5000, () => {
  console.log("Server up and runnin on PORT:5000");
});
