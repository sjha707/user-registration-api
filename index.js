const express = require("express");
const app = express();
const port = 9000;

const bodyParser = require("body-parser");

require("./db");
require("./models/user");
const authroutes = require("./routes/authRoutes");

const requiretoken = require("./middleware/Authtoken");

app.use(bodyParser.json());
app.use(authroutes);

app.get("/", requiretoken, (req, res) => {
  res.send("Api is Working Proper ");
});

// app.post("/signup", (req, res) => {
//   //   console.log(req.body);
// });

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
