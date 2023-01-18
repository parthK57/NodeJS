const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>PARTH</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
