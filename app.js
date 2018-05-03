// get dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Get API routes
const publications = require('./routes/publications');
const projects = require('./routes/projects');

const app = express();

// connect to db
const mongoDB = 'mongodb://localhost/mean-angular5';
mongoose.connect(mongoDB)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
mongoose.Promise = global.Promise;

// parsers for POST data
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// set out api routes
app.use('/api', publications);
app.use('/api', projects);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;