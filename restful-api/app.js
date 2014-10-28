var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

if (process.env.ENV === "prod") {
  app.set('port', 80);
} else {
  app.set('port', 3000);
}

console.log("here")

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/pages')(app);     // Responds to GET request for html
require('./routes/services')(app);  // The restful api routes

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});