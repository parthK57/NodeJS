const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url == "/") {
    let msg = "";
    fs.readFile("./message.txt", (err, data) => {
      if (err) throw err;
      else {
        msg = data.toString();
        res.write("<html>");
        res.write("<body>");
        res.write(`<h1>${msg}</h1>`);
        res.write('<form action ="/message" method="POST">');
        res.write('<input type="text" name="message"/>');
        res.write('<button type="submit">Submit</button>');
        res.write("</body>");
        res.write("</html>");
        return res.end();
      }
    });
    // HTML //
  } else if (url == "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      //   console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString().split("=")[1];
      //   console.log(parsedBody);
      fs.writeFile("message.txt", parsedBody, (err) => {
        if (err) console.log(err);
      });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.on("connection", (stream) =>
  console.log("Someone connected to our server!")
);
server.listen(3000);
