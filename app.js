//Los Require
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;

const app = express();

app.listen(PORT, () => console.log("running on port 4000"));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});
