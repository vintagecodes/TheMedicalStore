const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));





// default URL for website
app.get("/", function(req,res){
    res.render("index");
  });

app.get("/about", function(req,res){
  res.render("about");
  });
app.get("/contact", function(req,res){
  res.render("contact");
  });

app.get("/product-list", function(req,res){
  res.render("product-list");
  });

app.get("/buy", function(req,res){
  res.render("buy");
  });

app.get("/home", function(req,res){
  res.render("about");
    });







const server = http.createServer(app);
const port = 9000;
server.listen(port);
console.debug('Server listening on port ' + port);