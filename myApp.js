var express = require('express');
var app = express();
//bGround.log("Hello World");
console.log("Hello World");


app.get("/", (req, res) => {
  res.send("Hello Express");
})







 module.exports = app;
