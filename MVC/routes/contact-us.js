const express = require("express");

const router = express.Router();

const contactUsController = require("../controllers/userInterface");

router.get("/contact-us", contactUsController.getContactUs);

module.exports = router;
