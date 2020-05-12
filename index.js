
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){

  var radCylinder = parseFloat(req.body.n1);
  var heightCylinder = parseFloat(req.body.n2);

    var circumCylinder = 2 * Math.PI * radCylinder;
    var volCylinder = heightCylinder * Math.PI * Math.pow(radCylinder, 2);

  res.send("The Volume of the Cylinder is " + volCylinder.toFixed(2));
});

app.listen(3000, function() {
console.log ("Server is running on port 3000");
});
