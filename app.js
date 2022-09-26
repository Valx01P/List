//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//ejs is a template for express so it must go below it
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
//there is actually a function that tells us the day of the week sun-sat (0-6)
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
//this is better than using and if else statment, switch statement for more
  switch (currentDay) {
    case 0:
      day = "Sunday"
      break;
    case 1:
      day = "Monday"
      break;
    case 2:
      day = "Tuesday"
      break;
    case 3:
      day = "Wednesday"
      break;
    case 4:
      day = "Thursday"
      break;
    case 5:
      day = "Friday"
      break;
    case 6:
      day = "Saturday"
      break;
      //default statement should typically not occur
    default:
    console.log("Error: current day is equal to: " + currentDay);
  }
//without ejs we would not be able to do this
  res.render("list", {
    kindOfDay: day
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
