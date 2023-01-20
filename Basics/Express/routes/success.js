const path = require("path");
const express = require("express");

const router = express.Router();

router.post("/success", (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, "..", "views", "success.html"));
});

module.exports = router;
