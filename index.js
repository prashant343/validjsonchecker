
var express = require('express');

var app = express();

//var path = require('path');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var cors = require('cors');


//routes
//var data = require('./routes/data');
//var users = require('./routes/users');

//CORS
/*app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Cache-Control, XMLHttpRequest, Origin, Authorization, Content-Type, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
  next();
});
*/

var apiver = "/apiv1";
var dataapi = apiver + "/data";
var usersapi = apiver + "/users";



//app.use(dataapi,data);
//app.use(usersapi,users);

var port = 5555;

app.listen(port, function () {
  console.log('validJSON listening on port  -  '+ port)
})



//Basic routing
//app.use('/',home);
app.get('/', function (req, res) {
  res.send('Welcome to validJSON 1.0')
})




app.route('/').post(function(req,res)
{


  var req_json = JSON.parse(req.body);
  
 //if(!req_json)
 //{
  res.send("go");
 //}
  //var email = 





//console.log(req.body.email);

});



/*

mongoclient.connect(url,function(err,db)
{
 //var cursor = db.collection('abc').find();

   // cursor.each(function(err, doc) {

     //   console.log(doc);

    //});

db.collection('abc').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee",
        abc:"sd"
    });








});
*/



