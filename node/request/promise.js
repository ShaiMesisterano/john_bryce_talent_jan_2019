const request = require("request");

function displayKeshet() {
  return new Promise((resolve, reject) => {
    request("https://www.keshet-teamim.co.il", (error, response, body) =>
      resolve("keshet is here")
    );
  });
}

function displayFacebook() {
  return new Promise((resolve, reject) => {
    request("https://www.facebook.com", (error, response, body) =>
      resolve("facebook is here")
    );
  });
}

// Promises
// displayKeshet().then(data => {
//   console.log(data);
//   displayFacebook().then(data => console.log(data));
// });

// displayKeshet()
//   .then(data => {
//     console.log(data);
//     return displayFacebook();
//   })
//   .then(data => console.log(data));

//Async/Await
(async function() {
  const keshetResult = await displayKeshet();
  console.log(keshetResult);
  console.log("1");
  const facebookResult = await displayFacebook();
  console.log(facebookResult);
})();
