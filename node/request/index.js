// const request = require("request");
const requestPromise = require("./request-promise");

// console.log("1");
// setTimeout(() => {
//   request("https://www.keshet-teamim.co.il", (error, response, body) =>
//     console.log("keshet is here")
//   );
// }, 5000);
// console.log("2");
// setTimeout(() => {
//   request("https://www.facebook.com", (error, response, body) =>
//     console.log("facebook is here")
//   );
// }, 5000);

(async function() {
  const keshetBody = await requestPromise("https://www.cnn.com");
  console.log(keshetBody);
  const facebookBody = await requestPromise("https://www.bbc.co.uk");
  console.log(facebookBody);
})();
