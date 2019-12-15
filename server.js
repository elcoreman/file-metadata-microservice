"use strict";

const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const upload = multer();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", (req, res) => {
  res.json({ greetings: "Hello, API" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Node.js listening ...");
});
