const express = require("express");

const router = express.Router();

// CONTROLLERS
const user = require("../controller/user");

router.patch("/patchuser", user.patchUserHandler);

module.exports = router;