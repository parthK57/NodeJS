const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");


// Routes
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorRoute = require("./routes/error");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// here "/admin" & "/shop" are the common routes so you can mention it here itself in th .use() method
app.use("/admin", adminRoute);
app.use("/shop", shopRoute);
app.use(errorRoute);

const server = http.createServer(app);

server.listen(3000);
