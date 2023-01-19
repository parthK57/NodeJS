const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Inside root");
  res.send("Home");
});

module.exports = router;
