const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from server side!");
});

app.get("/api/v1/members", (req, res) => {
  res.status(200).json({
    status: "success",
    results: "length",
    data: "",
  });
});

module.exports = app;
