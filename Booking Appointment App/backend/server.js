const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

// ROUTES
const postUserRoute = require("./routes/post-user");

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use(postUserRoute);

app.listen(3000, () => console.log("server live at -> http://localhost:3000"));
