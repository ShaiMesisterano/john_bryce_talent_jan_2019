const express = require("express");
const mongodb = require("mongodb");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

mongodb.MongoClient.connect(
  //   "/pizza_boris",
  "mongodb://localhost:27017/pizza_boris",
  (error, pizzaBorisDB) => {
    const doughs = pizzaBorisDB.db("pizza_boris").collection("doughs");

    doughs.find().toArray((error, docs) => {
      docs.forEach(doc => console.log(doc.name));
    });
  }
);  

// app.get();
app.post("/doughs", (request, response) => {
  console.log(request.body);
});
// app.delete();
// app.put();

app.listen(3000, () => console.log("Running on port 3000..."));
