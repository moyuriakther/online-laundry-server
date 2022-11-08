const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3050;
app.listen(port);
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hello world");
});
