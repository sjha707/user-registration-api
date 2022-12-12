const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

require("dotenv").config();

//user Registration Process Section

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    return res.status(404).send({ error: "Fill The All Field First" });
  }
  User.findOne({ email: email }).then(async (saveuser) => {
    if (saveuser) {
      return res.status(422).send({ error: " Invalid User" });
    }
    const user = new User({
      name,
      email,
      password,
    });
    try {
      await user.save();
      //   console.log(req.body);
      const token = jwt.sign({ _id: user._id }, process.env.JWT);
      res.send({ token });

      //   res.send({ message: "user Registration Process is Done" });
    } catch (err) {
      console.log(err);
      return res.status(422).send({ err: err.message });
    }
  });
});

module.exports = router;
