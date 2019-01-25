const fs = require("fs");

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (error, body) => {
      if (error) reject(error);
      resolve(body);
    });
  });
}

module.exports = {
  readFile
};
