console.log("Hello world!");

const fs = require("fs");

fs.writeFileSync("nodeCode.js", "console.log(\"Written by node\")");
