const request = require("request");

const requestPromise = url => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) reject(error);
      resolve(body);
    });
  });
};

module.exports = requestPromise;
