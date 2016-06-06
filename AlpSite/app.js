var express    = require("express");
var app        = express();
var path       = require('path');
var bodyParser = require('body-parser');
var eventCtrl  = require(path.join(__dirname +  '/controller/event.controller.js'));
var userCtrl   = require(path.join(__dirname +  '/controller/user.controller.js'));
var mongoose   = require('mongoose');

mongoose.connect('mongodb://localhost/local');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection OK!");
});

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname +  '/view/index.html'));
});

app.get('/calendar',function(req,res){
  return eventCtrl.list(req, res);
});

app.get('/event',function(req,res){
  return eventCtrl.getById(req, res);
  // res.render('event', {user: "Great User", title:"homepage"});
  //res.sendFile(path.join(__dirname +  '/view/event.html'));
}); 

app.get('/addevent',function(req,res){
  res.sendFile(path.join(__dirname +  '/view/addevent.html'));
}); 

app.post('/addevent',function(req,res){
    return eventCtrl.create(req, res);
});

app.get('/adduser',function(req,res){
  res.sendFile(path.join(__dirname +  '/view/adduser.html'));
}); 

app.post('/adduser',function(req,res){
    return userCtrl.create(req, res);
}); 

app.listen(3000);

console.log("Running at Port 3000");