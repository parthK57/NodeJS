const express = require("express")

const router = express.Router();

// CONTROLLERS
const user = require("../controller/user");

router.post("/postuser", user.postUserHandler);

module.exports = router;
