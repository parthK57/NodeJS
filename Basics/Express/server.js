const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// Routes
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorRoute = require("./routes/error");
const contactUsRoute = require("./routes/contact-us");
const successRoute = require("./routes/success");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// here "/admin" & "/shop" are the common routes so you can mention it here itself in th .use() method
app.use("/admin", adminRoute);
app.use("/shop", shopRoute);
app.use(contactUsRoute);
app.use(successRoute);
app.use(errorRoute);

const server = http.createServer(app);

server.listen(3000);
