var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

var routes = require('./api/routes/routes'); //importing route

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json())

app.listen(port);

routes(app); //register the route

console.log('todo list RESTful API server started on: ' + port);