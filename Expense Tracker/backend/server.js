const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: false}));

// ROUTES
const orderRoute = require("./routes/order");
const deleteRoute = require("./routes/order");
const dataRoute = require("./routes/order");

app.use(orderRoute);
app.use(deleteRoute);
app.use(dataRoute);

app.listen(3000, () => console.log("http://localhost:3000"));
