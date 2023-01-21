const express = require("express");

const router = express.Router();

// CONTROLLERS
const user = require("../controller/user");

router.get("/deleteuser", user.deleteUserHandler);

module.exports = router;