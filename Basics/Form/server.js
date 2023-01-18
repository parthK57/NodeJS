const http = require("http");

const routes = require("./routes.js");

const server = http.createServer(routes);

server.on("connection", (stream) =>
  console.log("Someone connected to our server!")
);
server.listen(3000);
