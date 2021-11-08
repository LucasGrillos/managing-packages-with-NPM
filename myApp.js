var express = require('express');
var app = express();
require('dotenv').config();
//bGround.log("Hello World");

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);

  next();
});

/*
app.get("/", (req, res) => {
  res.send("Hello Express");
})
*/

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})
app.use('/public', express.static(__dirname + "/public"));

/*
app.get("/json", (req, res) => {
  res.json(
    {"message": "Hello json"}
  );
});
*/

app.get("/json", (req, res) => {
  var jsonResponse = {"message": "Hello json"};

  if (process.env.MESSAGE_STYLE==="uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase();
  }

  res.json(jsonResponse);
});




module.exports = app;
