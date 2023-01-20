const path = require("path");
const express = require("express");

const router = express.Router();

const successController = require("../controllers/userInterface");

router.post("/success", successController.postSuccess);

module.exports = router;
