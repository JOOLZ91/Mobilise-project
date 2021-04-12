const router = require("express").Router();

const loginModel = require("./loginModel");

const comparePsw = (psw, psw2) => {
  if (psw === psw2) {
    return true;
  } else {
    return false;
  }
};

router.post("/", async (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const user = await loginModel.findOne({ username: data.username });
    console.log(user);
    if (user) {
      const isValidPsw = comparePsw(data.password, user.password);
      if (isValidPsw) {
        return res.status(200).send({ message: "User validated" });
      } else {
        return res
          .status(400)
          .send({ error: true, message: "Invalid password" });
      }
    } else {
      return res.status(400).send({ error: true, message: "User not found" });
    }
  } catch (err) {
    return res
      .status(400)
      .send({ error: true, message: "Problems connecting to database" });
  }
});

module.exports = router;
