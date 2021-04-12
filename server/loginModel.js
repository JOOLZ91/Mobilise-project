const mongoose = require("mongoose");
const schema = mongoose.Schema;

const loginSchema = new schema({
  name: String,
  surname: String,
  username: String,
  password: String,
  email: String,
  age: Number,
});

const loginModel = mongoose.model("Users", loginSchema);

module.exports = loginModel;