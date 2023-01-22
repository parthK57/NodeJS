const express = require("express");

const router = express.Router();

// CONTROLLERS
const user = require("../controller/user");

router.use("/allusers", user.allUserHandler);

module.exports = router;