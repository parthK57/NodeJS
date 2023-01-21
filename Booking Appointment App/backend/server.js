const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

// ROUTES
const postUserRoute = require("./routes/post-user");
const patchUserRoute = require("./routes/patch-user");
const deleteUserRoute = require("./routes/delete-user");

app.use(bodyParser.json({ extended: false }));

app.use(postUserRoute);
app.use(patchUserRoute);
app.use(deleteUserRoute);

app.listen(3000, () => console.log("server live at -> http://localhost:3000"));
