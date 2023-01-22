const express = require("express");

const router = express.Router();

// CONTROLLERS
const orderHandler = require("../controller/order");

router.post("/postorder", orderHandler.postOrderHandler);
router.post("/deleteorder", orderHandler.deleteOrderHandler);
router.get("/", orderHandler.getOrdersHandler);

module.exports = router;