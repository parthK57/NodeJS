const express = require("express");

const router = express.Router();

// CONTROLLERS
const user = require("../controller/user");

router.post("/deleteuser", user.deleteUserHandler);

module.exports = router;