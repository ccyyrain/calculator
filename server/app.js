var debug = require('debug')('app:startup');
var express = require('express');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();



// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var reactBase = path.resolve(__dirname, '../client/build')
if (!fs.existsSync(reactBase)) {
  throw 'TODO, need to `npm run build` in client dir'
}
app.use('/static', express.static(path.join(reactBase, 'static')));
// app.use(express.static(reactBase));
var indexFile = path.join(reactBase, 'index.html')
app.use(function(req, res, next) {
  res.sendFile(indexFile, function(err) {
    next(err);
  });
});

//app.use('/', index);
//app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  console.error(err);

  // render error json
  const status = err.status || 500;
  json = {
    'error': status
  }
  if (req.app.get('env') === 'development') {
    json.message = err.message;
  }

  res.status(status);
  res.json(json);
});

debug(`app.js loaded`);
module.exports = app;
