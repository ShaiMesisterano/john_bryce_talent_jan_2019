const myFs = require("./fs-promise");

(async function() {
  const data = await myFs.readFile("log.txt");
  console.log(data);
})();
