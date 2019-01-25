const fs = require("fs");

function readFile(filename) {
  fs.readFile(filename, "utf-8", (error, body) => {
    if (error) console.log(error);
    console.log(body);
  });
}

module.exports = {
  readFile
};
