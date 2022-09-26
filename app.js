//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//item prototype
var items = ["Buy Food", "Cook Food", "Eat Food"];
//ejs is a template for express so it must go below it
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
//there is actually a function that tells us the day of the week sun-sat (0-6)
  var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var day = today.toLocaleDateString("en-US", options);

//without ejs we would not be able to do this
  res.render("list", {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res){
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
