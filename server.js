
var express = require('express');
var app = express();
var fs = require("fs");
var num = 0;
var num1 = 0;

app.use(express.static('public'));
app.get('/IoTDeviceList', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/IoTDeviceList/:id', function (req, res) {
	if (true) {
		num = req.params.id;
	}
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var devices = JSON.parse( data );
      var device = devices["IoTDevice" + req.params.id] 
      console.log( device );
      console.log(num);
      res.end( JSON.stringify(device));
      
   });
})
app.get('/id', function (req, res) {
	
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var devices = JSON.parse( data );
      var device = devices["IoTDevice" + num] 
      console.log( device );
      
      res.end( JSON.stringify(device));
   });
})


app.get('/IoTDeviceList/:id/PurchaseHistory', function (req, res) {
	if (true) {
		num = req.params.id;
	}
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var devices = JSON.parse( data );
      var device = devices["IoTDevice" + req.params.id] 
      var history = device["PurchaseHistory"]
      console.log( history );
      res.end( JSON.stringify(history));
   });
})
app.get('/id/history', function (req, res) {
	
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var devices = JSON.parse( data );
      var device = devices["IoTDevice" + num] 
      var history = device["PurchaseHistory"]
      console.log( history );
      res.end( JSON.stringify(history));
   });
})
app.get('/IoTDeviceList/:id/PurchaseHistory/:OrderId', function (req, res) {
   // First read existing users.
   if (true) {
		num = req.params.id;
		num1 = req.params.OrderId;
	}
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var devices = JSON.parse( data );
      var device = devices["IoTDevice" + req.params.id] 
      var history = device["PurchaseHistory"]
      var statistic = history["Year" + req.params.OrderId]
      console.log( statistic );
      res.end( JSON.stringify(statistic));
   });
})

app.get('/CollectionOfGivenEntity', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var devices = JSON.parse( data );
      var device = devices["IoTDevice" + num] 
      var history = device["PurchaseHistory"]
      var statistic = history["Year" + num1]
      console.log( statistic );
      res.end( JSON.stringify(statistic));
   });
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})