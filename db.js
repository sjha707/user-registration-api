require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.BD_URL)
  .then(() => {
    console.log("db Connected.....");
  })
  .catch((err) => {
    console.log(err);
  });
