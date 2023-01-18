const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/home") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Welcome Home</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (url == "/about") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Welcome to about us page!</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (url == "/node") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Welcome to NodeJs!</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);