var express = require('express');
var app = express();
require('dotenv').config();
//bGround.log("Hello World");
console.log("Hello World");

/*
app.get("/", (req, res) => {
  res.send("Hello Express");
})
*/



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
  var jsonResponse = ({"message": "Hello json"});
  if (process.env.MESSAGE_STYLE==="UPPERCASE") {
    console.log("HELLO!");
    jsonResponse = jsonResponse.message.toUpperCase();
  }
  console.log("HELLO 2");
  res.json(jsonResponse);
});




module.exports = app;
